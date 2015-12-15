package com.util;


import java.io.UnsupportedEncodingException;
import java.lang.reflect.Array;
import java.text.DecimalFormat;
import java.util.*;

/**
 *  Class Name : StringUtil.java
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


public class StringUtil {

	/**
	 * String을 읽어 알파벳과 숫자만 모아 return ('_', '-', ' ' 포함)
	 *
	 * @param s
	 *            source String
	 * @return 알파벳을 제외하고 걸려진 String
	 */
	public static String alphaNumOnly(String s) {
		int i = s.length();
		StringBuffer stringbuffer = new StringBuffer(i);
		for (int j = 0; j < i; j++) {
			char c = s.charAt(j);
			if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c == '_' || c == '-'
				|| c == ' ') {
				stringbuffer.append(c);
			}
		}

		return stringbuffer.toString();
	}

	/**
	 * String을 읽어 알파벳과 숫자만 있는지 check ('_', '-', ' ' 포함)
	 *
	 * @param s
	 *            source String
	 */
	public static boolean isAlphaNumOnly(String s) {
		int i = s.length();
		for (int j = 0; j < i; j++) {
			char c = s.charAt(j);
			if ((c < 'a' || c > 'z') && (c < 'A' || c > 'Z') && (c < '0' || c > '9') && c != '_' && c != '-'
				&& c != ' ') {
				return false;
			}
		}

		return true;
	}

	/**
	 * Alphabet 문자인지 체크
	 *
	 * @param ch
	 *            체크할 문자
	 * @return Alphabet 문자이면 true, 그렇지 않으면 false
	 */
	public static boolean isAlpha(char ch) {
		if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
			return true;
		}

		return false;
	}

	/**
	 * 숫자 문자인지 체크
	 *
	 * @param ch
	 *            체크할 문자
	 * @return 숫자 문자이면 true, 그렇지 않으면 false
	 */
	public static boolean isNumeric(char ch) {
		if (ch >= '0' && ch <= '9') {
			return true;
		}

		return false;
	}
	public static boolean isNumber(String s) {
	    try {
	        Integer.parseInt(s);
	        return true;
	    } catch (NumberFormatException e) {
	        return false;
	    }
	}
	public static boolean isStringDouble(String s) {
	    try {
	        Double.parseDouble(s);
	        return true;
	    } catch (NumberFormatException e) {
	        return false;
	    }
	}
	/**
	 * String s에서 연속되는 space들을 하나로 압축한 String으로 return
	 *
	 * @param s
	 *            source String
	 */
	public static String normalizeWhitespace(String s) {
		StringBuffer stringbuffer = new StringBuffer();
		int i = s.length();
		boolean flag = false;
		for (int j = 0; j < i; j++) {
			char c = s.charAt(j);
			switch (c) {
			case 9: // '\t'
			case 10: // '\n'
			case 13: // '\r'
			case 32: // ' '
				if (!flag) {
					stringbuffer.append(' ');
					flag = true;
				}
				break;

			default:
				stringbuffer.append(c);
				flag = false;
				break;
			}
		}

		return stringbuffer.toString();
	}

	/**
	 * String s에서 character c가 몇 개가 있는지 return
	 *
	 * @param s
	 *            source String
	 * @param c
	 *            찾을 character
	 */
	public static int numOccurrences(String s, char c) {
		int i = 0;
		int j = 0;
		int l;
		for (int k = s.length(); j < k; j = l + 1) {
			l = s.indexOf(c, j);
			if (l < 0) {
				break;
			}
			i++;
		}

		return i;
	}

	/**
	 * String s에서 String s1에 포함되는 모든 char를 제거한 String으로 return
	 *
	 * @param s
	 *            source String
	 * @param s1
	 *            삭제시킬 sub String
	 */
	public static String removeCharacters(String s, String s1) {

		if (s == null || s.length() < 1) {
			return "";
		}

		int i = s.length();
		StringBuffer stringbuffer = new StringBuffer(i);
		for (int j = 0; j < i; j++) {
			char c = s.charAt(j);
			if (s1.indexOf(c) == -1) {
				stringbuffer.append(c);
			}
		}

		return stringbuffer.toString();
	}

	/**
	 * String s에서 존재하는 space들을 모두 제거한 String으로 return
	 *
	 * @param s
	 *            source String
	 */
	public static String removeWhiteSpace(String s) {

		if (s == null || s.length() < 1) {
			return "";
		}

		int i = s.length();
		StringBuffer stringbuffer = new StringBuffer(i);
		for (int j = 0; j < i; j++) {
			char c = s.charAt(j);
			if (!Character.isWhitespace(c)) {
				stringbuffer.append(c);
			}
		}

		return stringbuffer.toString();
	}

	/**
	 * String target의 arguments[0],arguments[1]..부분을
	 * replacements[0],replacements[1]..으로 바꾸어 return
	 *
	 * @param target
	 *            source String
	 * @param arguments
	 *            바뀌어질 대상의 String 배열
	 * @param replacements
	 *            대체될 String 배열
	 */
	public static String replace(String target, String[] arguments, String[] replacements) {
		if (target == null || arguments == null || replacements == null) {
			return target;
		}

		for (int index = 0; index < arguments.length; index++) {
			target = replace(target, arguments[index], replacements[index]);
		}

		return target;
	}

	/**
	 * String target에 포함되어 있는 argument을 replacement로 바꾸어 return
	 *
	 * @param target
	 *            source String
	 * @param argument
	 *            old String
	 * @param replacement
	 *            new String
	 */
	public static String replace(String target, String argument, String replacement) {
		if (target == null || argument == null || replacement == null) {
			return target;
		}

		int i = target.indexOf(argument);

		if (i == -1) {
			return target;
		}

		StringBuffer targetSB = new StringBuffer(target);
		while (i != -1) {
			targetSB.delete(i, i + argument.length());
			targetSB.insert(i, replacement);
			// check for any more
			i = targetSB.toString().indexOf(argument, i + replacement.length());
		}

		return targetSB.toString();
	}

	/**
	 * String s에 있는 character c를 이용하여 String을 분리한다.
	 *
	 * @param s
	 *            source String
	 * @param c
	 *            String s를 분리할 character
	 * @return 분리된 String 배열
	 */
	public static String[] splitStringAtCharacter(String s, char c) {
		String as[] = new String[numOccurrences(s, c) + 1];
		splitStringAtCharacter(s, c, as, 0);
		return as;
	}

	protected static int splitStringAtCharacter(String s, char c, String as[], int i) {
		int j = 0;
		int k = i;
		int l = 0;
		int j1;
		for (int i1 = s.length(); l <= i1 && k < as.length; l = j1 + 1) {
			j1 = s.indexOf(c, l);
			if (j1 < 0) {
				j1 = i1;
			}
			as[k] = s.substring(l, j1);
			j++;
			k++;
		}

		return j;
	}

	/**
	 * Convert a String to a boolean
	 * <p>
	 * 대소문자 상관없이 "true","yes","ok","okay","on","1"인 경우 true를 return한다.
	 *
	 * @param data
	 *            the thing to convert
	 * @return the converted data
	 */
	public static boolean string2Boolean(String data) {
		if (data.equalsIgnoreCase("true")) {
			return true;
		}
		if (data.equalsIgnoreCase("yes")) {
			return true;
		}
		if (data.equalsIgnoreCase("ok")) {
			return true;
		}
		if (data.equalsIgnoreCase("okay")) {
			return true;
		}
		if (data.equalsIgnoreCase("on")) {
			return true;
		}
		if (data.equalsIgnoreCase("1")) {
			return true;
		}

		return false;
	}

	/**
	 * Convert a String to an int
	 *
	 * @param data
	 *            the thing to convert
	 * @return the converted data
	 */
	public static int string2Int(String data) {
		try {
			return Integer.parseInt(data);
		} catch (NumberFormatException ex) {
			return 0;
		}
	}

	/**
	 * Convert a String to a Hashtable
	 * <p>
	 * "key1=value1 key2=value2 .... " 구조의 string을 Hashtable로 변환
	 *
	 * @param data
	 *            the thing to convert
	 * @return the converted data
	 */
	public static Map<String, String> string2Hashtable(String data) {

		Map<String, String> commands = new HashMap<String, String>();

		data = normalizeWhitespace(data);
		String[] data_arr = splitStringAtCharacter(data, ' ');

		for (int i = 0; i < data_arr.length; i++) {
			int equ_pos = data_arr[i].indexOf('=');
			String key = data_arr[i].substring(0, equ_pos);
			String value = data_arr[i].substring(equ_pos + 1);

			commands.put(key, value);
		}

		return commands;
	}

	/**
	 * Convert a Hashtable to a Sting
	 * <p>
	 * "key1=value1 key2=value2 .... " 구조의 string으로 변환
	 *
	 * @return the converted data
	 */
	public static String hashtable2String(Map<String, String> commands) {
		Iterator<?> it = commands.keySet().iterator();
		StringBuffer retcode = new StringBuffer();

		while (it.hasNext()) {
			//String key = "";
			//String value = "";

			try {
				Map.Entry<?,?> me = (Map.Entry<?,?>) it.next();

				//key = (String) it.next();
				//value = (String) commands.get(key);

				retcode.append(me.getKey());
				retcode.append("=");
				retcode.append(me.getValue());
				retcode.append(" ");
			} catch (ClassCastException ex) {
				//exception pass
			}
		}

		return retcode.toString().trim();
	}

	/**
	 * String s에 있는 alphabet을 모두 소문자로 바꾸어 return
	 *
	 * @param s
	 *            source String
	 */
	public static String toLowerCase(String s) {
		int i;
		int j;
		char c;
		label0: {
			i = s.length();
			for (j = 0; j < i; j++) {
				char c1 = s.charAt(j);
				c = Character.toLowerCase(c1);
				if (c1 != c) {
					break label0;
				}
			}

			return s;
		}
		char ac[] = new char[i];
		int k;
		for (k = 0; k < j; k++) {
			ac[k] = s.charAt(k);
		}

		ac[k++] = c;
		for (; k < i; k++) {
			ac[k] = Character.toLowerCase(s.charAt(k));
		}

		String s1 = new String(ac, 0, i);
		return s1;
	}

	/**
	 * String s에 있는 alphabet을 모두 대문자로 바꾸어 return
	 *
	 * @param s
	 *            source String
	 */
	public static String toUpperCase(String s) {
		int i;
		int j;
		char c;
		label0: {
			i = s.length();
			for (j = 0; j < i; j++) {
				char c1 = s.charAt(j);
				c = Character.toUpperCase(c1);
				if (c1 != c) {
					break label0;
				}
			}

			return s;
		}
		char ac[] = new char[i];
		int k;
		for (k = 0; k < j; k++) {
			ac[k] = s.charAt(k);
		}

		ac[k++] = c;
		for (; k < i; k++) {
			ac[k] = Character.toUpperCase(s.charAt(k));
		}

		return new String(ac, 0, i);
	}

	/**
	 * String s에 있는 sub string s1을 이용하여 String을 분리한다.
	 *
	 * @param s
	 *            source String
	 * @param s1
	 *            String s를 분리할 sub string
	 * @return 분리된 string의 벡터
	 */
	public static Vector<String> tokenizer(String s, String s1) {
		if (s == null) {
			return null;
		}
		Vector<String> vector = null;
		for (StringTokenizer stringtokenizer = new StringTokenizer(s, s1); stringtokenizer.hasMoreTokens(); vector
		.addElement(stringtokenizer.nextToken().trim())) {
			if (vector == null) {
				vector = new Vector<String>();
			}
		}

		return vector;
	}

	/**
	 * &, <, >, "를 &amp;amp;, &amp;lt;, &amp;gt;, &amp;quot; 로 대체한 string으로 바꾸어
	 * 줌
	 *
	 * @param s
	 *            source String
	 */
	public static String escapeHtmlString(String s) {
		String s1 = s;
		if (s1 == null) {
			return null;
		}
		if (s1.indexOf(38, 0) != -1) {
			s1 = replace(s1, "&", "&amp;");
		}
		if (s1.indexOf(60, 0) != -1) {
			s1 = replace(s1, "<", "&lt;");
		}
		if (s1.indexOf(62, 0) != -1) {
			s1 = replace(s1, ">", "&gt;");
		}
		if (s1.indexOf(34, 0) != -1) {
			s1 = replace(s1, "\"", "&quot;");
		}
		return s1;
	}

	/**
	 * &amp;amp;, &amp;lt;, &amp;gt;, &amp;quot;를 &, <, >, " 로 대체한 string으로 바꾸어
	 * 줌
	 *
	 * @param s
	 *            source String
	 */
	public static String reEscapeHtmlString(String s) {
		String s1 = s;
		if (s1 == null) {
			return null;
		}
		String[] arguments = { "&amp;", "&lt;", "&gt;", "&quot;" };
		String[] replacements = { "&", "<", ">", "\"" };
		return replace(s1, arguments, replacements);
	}

	/**
	 * character c로 length만큼 채워진 String을 return
	 *
	 * @param c
	 *            string으로 채워질 character
	 * @param length
	 *            원하는 character 갯수
	 * @return charracter c로 length 갯수 만큼 채워진 string
	 */
	public static String fill(char c, int length) {
		if (length <= 0) {
			return "";
		}

		char[] ca = new char[length];
		for (int index = 0; index < length; index++) {
			ca[index] = c;
		}

		return new String(ca);
	}

	/**
	 * 주어진 length를 유지하기 위해 String s에 character c를 오른쪽으로 덧댄다.
	 * <p>
	 *
	 * <pre>
	 *  StringUtil.padRight(&quot;hahahaha&quot;, '.', 14);
	 *  StringUtil.padRight(&quot;hihihi&quot;, '.', 14);
	 *  StringUtil.padRight(&quot;hohohohoho&quot;, '.', 14);
	 *
	 *  은 다음과 같은 결과를 보여줄 것이다.
	 *
	 *  hahahaha.....
	 *  hihihi.......
	 *  hohohohoho...
	 * </pre>
	 *
	 * 위와 같이 일정한 사이즈로 문단을 구성하고자 할 때 유용할 것 임
	 *
	 * @param s
	 *            source String
	 * @param c
	 *            String s에 덧대질 character
	 * @param length
	 *            return될 String의 length
	 */
	public static String padRight(String s, char c, int length) {
		return s + fill(c, length - s.length());
	}

	/**
	 * 주어진 length를 유지하기 위해 String s에 character c를 왼쪽으로 덧댄다.
	 * <p>
	 *
	 * <pre>
	 *  StringUtil.padRight(&quot;hahahaha&quot;, '.', 14);
	 *  StringUtil.padRight(&quot;hihihi&quot;, '.', 14);
	 *  StringUtil.padRight(&quot;hohohohoho&quot;, '.', 14);
	 *
	 *  은 다음과 같은 결과를 보여줄 것이다.
	 *
	 *  .....hahahaha
	 *  .......hihihi
	 *  ...hohohohoho
	 * </pre>
	 *
	 * 위와 같이 일정한 사이즈로 문단을 구성하고자 할 때 유용할 것 임
	 *
	 * @param s
	 *            source String
	 * @param c
	 *            String s에 덧대질 character
	 * @param length
	 *            return될 String의 length
	 */
	public static String padLeft(String s, char c, int length) {
		return fill(c, length - s.length()) + s;
	}

	/**
	 * comma 구분자를 가지고 Array를 String으로 변환한다.
	 * <p>
	 * 예를들면<br>
	 * {"aaa","bbbb","cc"} ---> "aaa,bbbb,cc"
	 */
	public static String toString(Object[] args) {
		return toString(args, ",");
	}

	/**
	 * separator 구분자를 가지고 Array를 String으로 변환
	 */
	public static String toString(Object[] args, String separator) {
		if (args == null) {
			return null;
		}

		StringBuffer buf = new StringBuffer();

		for (int index = 0; index < args.length; index++) {
			if (index > 0) {
				buf.append(separator);
			}

			if (args[index] == null) {
				buf.append("null");
			} else {
				buf.append(args[index].toString());
			}
		}

		return buf.toString();
	}

	/**
	 * separator 구분자를 가지고 List를 String으로 변환
	 */
	public static String toString(List<Object> list, String separator) {
		StringBuffer buf = new StringBuffer();
		for (int index = 0; index < list.size(); index++) {
			if (index > 0) {
				buf.append(separator);
			}
			buf.append(list.get(index).toString());
		}
		return buf.toString();
	}

	/**
	 * 전달된 문자열을 src_enc 방식에서 dest_enc 방식으로 변환한다.
	 *
	 * @return String desc_enc 방식으로 변환된 문자열
	 *
	 * @throws UnsupportedEncodingException :
	 *             Encoding이 지원되지 않는 문자열 변환시
	 */
	public static String toConvert(String str, String src_enc, String dest_enc)
	throws UnsupportedEncodingException {
		if (str == null) {
			return "";
		}

		return new String(str.getBytes(src_enc), dest_enc);
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

		if (object instanceof Collection<?>) {
			Collection<?> collection = (Collection<?>) object;
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
	/**
	 * 날짜를 YYYY.MM.DD 형식으로 반환한다.
	 * 예 ) 200505=>2005.05로 변환
	 * @return 변환한 문자열
	 */
	static public String getStringDate(String src) {
		StringBuffer strRet = new StringBuffer();
		if (src.length() == 6) {
			strRet.append(src.substring(0, 4) + ".");
			strRet.append(src.substring(4, 6));
		} else if (src.length() == 8) {
			strRet.append(src.substring(0, 4) + ".");
			strRet.append(src.substring(4, 6) + ".");
			strRet.append(src.substring(6, 8));
		} else {
			strRet.append(src);
		}
		return strRet.toString();
	}

	/**
	 * 숫자를 100,000 형식으로 return
	 * @param intNumber
	 * @return
	 */
	public static String numberFormt(int intNumber) {

		String numberStr = "";
		try {
			DecimalFormat df = new DecimalFormat("###,##0");
			numberStr = df.format(intNumber);
		} catch (Exception e) {
		}
		return numberStr;
	}

	public static String numberFormt(long longNumber) {

		String numberStr = "";
		try {
			DecimalFormat df = new DecimalFormat("###,##0");
			numberStr = df.format(longNumber);
		} catch (Exception e) {
		}
		return numberStr;
	}

	public static String numberFormt(double longNumber) {

		String numberStr = "";
		try {
			DecimalFormat df = new DecimalFormat("###,##0.###");
			numberStr = df.format(longNumber);
		} catch (Exception e) {
		}
		return numberStr;
	}

	/**
	 * 문자를 100,000 형식으로 return
	 * @param strNumber
	 * @return
	 */
	public static String numberFormt(String strNumber) {

		String numberStr = "";
		try {
			int intNumber = Integer.parseInt(strNumber);
			DecimalFormat df = new DecimalFormat("###,##0");
			numberStr = df.format(intNumber);
		} catch (Exception e) {
		}
		return numberStr;
	}


	/**
	 * 문자열을 소문자로 변경하고, -는 _로 변경, -와 숫자를 제외한 특수문자 제거
	 * @param value 변환할 문자열
	 * @return String
	 */
	public static String getFlatName(String value) {
		value = value.toLowerCase(new Locale("en"));
		StringBuffer flatName = new StringBuffer();

		char ch;

		for (int count = 0; count < value.length(); count++) {
			ch = value.charAt(count);
			if ((ch == '_') || ((ch >= '0') && (ch <= '9')) || ((ch >= 'a') && (ch <= 'z'))) {
				flatName.append(ch);
			} else if (ch == '-') {
				flatName.append("_");
			}
		}

		return flatName.toString();
	}

	/**
	 * Description : 숫자, 영문을 제외한 모든 문자 삭제(특수문자, 한글 등등)
	 * @param value 변환할 문자열
	 * @return
	 */
	public static String getFlatFileName(String value) {

		StringBuffer flatName = new StringBuffer();
		char ch;

		for (int count = 0; count < value.length(); count++) {

			ch = value.charAt(count);

			if (!Character.isJavaIdentifierPart(ch)) {

				/*
				 * 예외 특수문자 및 변경 할 문자 처리하는 부분
				 */
				if (ch == '-') {
					//                  flatName.append('_');   // - : _ 로 변화하여 처리
					flatName.append(ch); // - : 변환하지 않고 처리
				} else if (ch == '.') {
					flatName.append(ch);
				}

			} else {

				/*
				 * 특수문자가 아닐 경우 영문과 숫자를 제외한 모든 문자 삭제
				 */
				if (((ch >= '0') && (ch <= '9')) || ((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z'))
						|| (ch == '_')) {
					flatName.append(ch);
				}

			}
		}
		return flatName.toString();
	}

	/**
	 *
	 * @param number
	 * @return String
	 */
	public static String getSpecComment(int number) {
		StringBuffer str = new StringBuffer();
		try {
			for (int i = 0; i < number; i++) {
				str.append("*");
			}
		} catch (Exception e) {
		}
		return str.toString();
	}

	public static String getMultiLineTrim(String str) {

		String rnStr = str;

		if (rnStr != null && !"".equals(rnStr)) {
			rnStr = "";
			String[] arrStr = str.split("\r\n");

			for (int iLoop = 0; iLoop < arrStr.length; iLoop++) {
				if (!rnStr.equals("")) {
					if (!"".equals(arrStr[iLoop].trim())) {
						rnStr += "\r\n" + arrStr[iLoop].trim();
					}
				}else{
					if (!"".equals(arrStr[iLoop].trim())) {
						rnStr += arrStr[iLoop].trim();
					}
				}
			}
		}

		return rnStr;
	}


	/**
	 * <p>문자 또는 숫자가 null 이거나, 공백만 있는지 체크한다.</p>
	 *
	 * <pre>
	 * StringUtil.isBlank(null)    = true
	 * StringUtil.isBlank("")      = true
	 * StringUtil.isBlank("  ")    = true
	 * StringUtil.isBlank(" bob ") = false
	 * StringUtil.isBlank(123)     = false
	 * </pre>
	 *
	 * @param object   (체크할 문자형, 숫자형 객체)
	 * @return boolean (체크결과)
	 */
	public static boolean isBlank(Object object) {
		if (object == null) return true;
		String str = String.valueOf(object);
		if (str.length() == 0) return true;
		for (int i = 0; i < str.length(); i++) {
			if ((Character.isWhitespace(str.charAt(i)) == false)) {
				return false;
			}
		}
		return true;
	}

	public static int CharLen(String xxx){
		int strlen = 0;
		for(int j = 0; j < xxx.length(); j++){
			char c = xxx.charAt(j);
			if ( c  <  0xac00 || 0xd7a3 < c ){
				strlen++;
			} else {
				strlen+=2;  //한글이다..
			}
		}
		return strlen;
	}

} // end class
