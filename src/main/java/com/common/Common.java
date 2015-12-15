package com.common;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.text.SimpleDateFormat;
import java.util.*;



/**
 *  Class Name : Common.java
 *  Description :
 *  Modification Information
 *
 *   Mod Date       Modifier    Description
 *   -----------    --------    ---------------------------
 *   2009. 7. 29.   shaby       최초 생성
 *
 *  @author shaby
 *  @since 2009. 7. 29.
 *  @version 1.0
 */
public  class Common {

	/**
	 * <p>문자 또는 숫자가 비어있는지 체크한다.</P>
	 *
	 * <pre>
	 * StringUtil.isEmpty(null)    = true
	 * StringUtil.isEmpty("")      = true
	 * StringUtil.isEmpty("  ")    = false
	 * StringUtil.isEmpty(" bob ") = false
	 * StringUtil.isEmpty(123)     = false
	 * </pre>
	 *
	 * @param object   (문자형, 숫자형 객체)
	 * @return boolean (체크결과)
	 */
	public static boolean isEmpty(Object object) {
		return object == null || String.valueOf(object).length() == 0;
	}


	public static String printByOutputStream(URL url,String charset) throws Exception ,IOException {
		URLConnection conn=null;
		String result = "";
		try {
			conn = url.openConnection();
			conn.connect();

			if( conn.getContentLength() != 0 ) {
				BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream() ,charset) );
				StringBuffer sbResult = new StringBuffer();
				char cBuffer[] = new char[1024];
				int nLength;

				while( (nLength = in.read(cBuffer, 0, 1024)) != -1 ){
					sbResult.append( cBuffer,0, nLength );
				}
				result = Common.trim(sbResult.toString());

				in.close();
			}

		} catch(Exception e) {
			e.printStackTrace();

		}finally{
			if(conn != null){conn = null; }
		}
		return result;
	}
	/**
	 *  byte2Hex
	 *  @return String
	 **/
	public static String byte2hex(byte[] raw){
		StringBuffer sb = new StringBuffer();
		String hex;
		for (int i=0; i<raw.length; i++){
			hex = "0" + Integer.toHexString(0xff & raw[i]);
			sb.append(hex.substring(hex.length()-2));
		}
		return sb.toString();
	}
	/**
	 *  현재 날짜를 패턴에 맞게 가져오기
	 *  @return String
	 **/
	public static byte[] hex2byte(String hex){

		byte[] b= new byte[hex.length()/2];
		for(int i=0; i<b.length; i++){
			b[i] = (byte)Integer.parseInt(hex.substring(2*i,2*i+2),16);
		}
		return b;
	}
	/**
	 *  현재 날짜를 패턴에 맞게 가져오기
	 *  @param  pattern
	 *  @return String
	 **/
	public static String getDateFormat(String pattern){
		java.util.Date now =  new java.util.Date();
		SimpleDateFormat ff  = new SimpleDateFormat(pattern);
		String wrtday = ff.format(now);
		return wrtday;
	}
	/**
	 *  엑셀 파일 헤더
	 *  @param  str 문자열
	 *  @return
	 **/

	public static void toExcelHeader(HttpServletResponse response,String str){
		String today = Common.getDateFormat("yyyyMMddHHmmss");
		response.setContentType("application/vnd.msexcel;charset=MS949");
		response.setHeader("Content-Disposition", "attachment; filename="+str+today+".xls");
		response.setHeader("Content-Description", "Excel Generated Data");
	}

	/**
	 *  CSV 파일 헤더
	 *  @param  str 문자열
	 *  @return
	 **/
	public static void toCSVHeader(HttpServletResponse response,String str){
		String today = Common.getDateFormat("yyyyMMddHHmmss");
		response.setContentType("application/vnd.msexcel;charset=MS949");
		response.setHeader("Content-Disposition", "attachment; filename="+str+today+".csv");
		response.setHeader("Content-Description", "CSV Generated Data");
		response.setHeader("Content-Transfer-Encoding", "binary;");
	}


	/**
	 *  공백 처리 및 널 문자 처리와 함께 인젝션 처리도 겸함
	 *  @param str 문자열
	 *  @return String
	 */
	public static String trim(String str){
		try {
			if(str.trim() == null || str.trim().equals(null) || "".equals(str.trim()) || "null".equals(str.trim())){
				str = "";
			}else{
				str = str.trim();
				str = str.replaceAll("null","");
			}

		} catch (Exception e) {
			str ="";
		}

		return str;
	}

	public static Object trim(Object str){
		if(str != null){
			return trim(str.toString());
		}else{
			return "";
		}
	}


	public static Map<String,Object> trimQuery(Map<String,Object> map)
	{
		if (map != null){
			Set<String> keySet = map.keySet();
			Iterator<String> it =  keySet.iterator();
			while (it.hasNext()){
				String name = it.next();
				if (name.indexOf("etc") > -1){
					map.put(name,"");
				}
			}
		}
		return map;
	}


	/**
	 *  임의의 날자를 원하는 패턴 형식으로 표현하기
	 *  @param pattern 날짜  패턴
	 *  @return String
	 */
	public static String getDate(String pattern)  {
		java.util.Date now =  new java.util.Date();
		SimpleDateFormat ff  = new SimpleDateFormat(pattern);
		String wrtday = ff.format(now);
		return wrtday;
	}

	/**
	 * 피벗 처리를 위한 구조 세팅
	 * @return List
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public static List<String> SettingStruct(List<Object> src , String mappingName ) {
		List<String> col = new ArrayList<String>(); // 구조
		try {
			for(int i=0;i<src.size(); i++){
				Map<String,Object> s = (HashMap)src.get(i);
				col.add((String)s.get(mappingName));
			}
		} catch (Exception e) {

		}
		return col;
	}
	/**
	 * 피벗 처리를 위한 구조 세팅
	 * @return List
	 * @throws Exception
	 */
	public static List<String> SettingStruct(String Map ) {
		List<String> col = new ArrayList<String>(); // 구조
		try {
			StringTokenizer src =new StringTokenizer(Map,"|");
			while(src.hasMoreTokens()){
				col.add(src.nextToken());
			}
		} catch (Exception e) {
		}
		return col;
	}
	/**
	 * 데이터부를 2차원 배열에 적재
	 * @return List
	 * @throws Exception
	 */
	public static String[][] SettingArray(int row, int col ) {
		String[][] arr = new String[row][col];
		try {
			for(int i=0;i< arr.length;i++){
				for(int j=0;j< arr[i].length;j++) {
					arr[i][j] = "0";
				}
			}
		} catch (Exception e) {

		}
		return arr;
	}

}
