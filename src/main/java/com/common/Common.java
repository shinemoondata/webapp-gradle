package com.common;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.net.URL;
import java.net.URLConnection;
import java.text.SimpleDateFormat;
import java.util.Collection;

/**
 *  Class Name : Common.java
 *  Description :
 *  Modification Information
 *
 *   Mod Date       Modifier    Description
 *   -----------    --------    ---------------------------
 *   2015. 7. 29.   shaby       최초 생성
 *
 *  @author shaby
 *  @since 2015. 7. 29.
 *  @version 1.0
 */
public  class Common {



	public static String printByOutputStream(URL url,String charset)  {
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
	 * Null String을 "" String으로 바꿔준다.
	 *
	 * @param str
	 *            Null 문자열
	 *
	 * @return "" 문자열(null이 아닐 경우는 변환할 문자열이 그대로 리턴)
	 */
	static public String NVL(String str) {
		if (str == null) {
			return "";
		}

		return str;
	}

	/**
	 * Null Object을 "" String으로 바꿔준다.
	 *
	 * @param str
	 * @return
	 * @exception ExpException
	 */
	static public String NVL(Object str) {
		if (str == null) {
			return "";
		}


		return str.toString();
	}

	// 문자열이 null인경우 replace_str을 Return한다.
	// 사용 예) 테이블의 <td>str</td>에서 str이 null인 경우
	// replate_str이 &nbsp;로 지정한다.
	/**
	 * 문자열이 null인경우 replace_str을 Return한다. 사용 예) 테이블의
	 * <td>str</td>
	 * 에서 str이 null인 경우 replate_str이 &nbsp;로 지정한다.
	 *
	 * @param str
	 *            Null 문자열
	 * @param replace_str
	 *            변환할 문자열
	 * @return 변환할 문자열
	 */
	static public Object NVL(Object str, Object replace_str)  {

		if (str instanceof Integer || str instanceof Long || str instanceof Double || str instanceof Float){
			if (str == null || (Integer)str == 0) {
				return replace_str;
			}else{
				return str;
			}
		}else{
			if (str == null || "".equals(str) ) {
				return replace_str;
			}else{
				return str;
			}
		}
	}
	static public String NVL(String str, String replace_str) {
		if (str == null || "".equals(str) ) {
			return replace_str;
		}else{
			return str;
		}
	}
	/**
	 * Null이거나 빈값(빈 문자열, 빈 컬렉션)인지 검사
	 *
	 * @param object
	 * @return
	 */
	public static boolean isEmpty(Object object) throws Exception {
		if (object == null) {
			return true;
		}

		if (object instanceof String) {
			String str = (String) object;
			return str.length() == 0;
		}

		if (object instanceof Collection) {
			Collection collection = (Collection) object;
			return collection.size() == 0;
		}

		if (object.getClass().isArray()) {
			try {
				if (Array.getLength(object) == 0) {
					return true;
				}
			} catch (Exception e) {
				//do nothing
			}
		}

		return false;
	}

}
