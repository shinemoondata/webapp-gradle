 /*--------------------------------------------------------------------------------*\
 *  JavaScript framework, version 2.0
 *
 *  Date : 2006. 08. 15.
 *  Copyright 1998-2007 by Vricks Studio All right reserved.
 *  @author Jeff Yang routine@vricks.com
 *  자주 쓰이는 스트링 관련 prototype관련 정리
\*--------------------------------------------------------------------------------*/


// HTML 특수문자를 변환
String.prototype.htmlChars = function() {
	var str = ((this.replace('"', '&amp;')).replace('"', '&quot;')).replace('\'', '&#39;');
	return (str.replace('<', '&lt;')).replace('>', '&gt;');
},
/*
  방법 1 :
  내용: String 객체의 프로토타입에 stripTags라는 메서드를 추가.
  결과: 실행 속도가 느림.
		"<",">" 무조건 제거됨(태그가 아니더라도)
*/
String.prototype.stripTags = function () {
	var str = this;
	var pos1 = str.indexOf('<');

	if (pos1 == -1) return str;
	else {
		var pos2 = str.indexOf('>', pos1);
		if (pos2 == -1) return str;
		return (str.substr(0, pos1) + str.substr(pos2+1)).stripTags();
	}
},

// -----------------------------------------------------------------------------
// 문자의 좌, 우 공백 제거
// @return : String
// -----------------------------------------------------------------------------
String.prototype.trim = function() {
		return this.replace(/(^\s*)|(\s*$)/g, "");
},

// -----------------------------------------------------------------------------
// encoding
// @return : String
// -----------------------------------------------------------------------------
String.prototype.encode = function() {
		return encodeURIComponent(this);
},

// -----------------------------------------------------------------------------
// decoding
// @return : String
// -----------------------------------------------------------------------------
String.prototype.decode = function() {
	var str="";
	str = this.replace(/\+/g," ");
	str = decodeURIComponent(str.replace(/\n/g,"<br>"));
	return str;
},


// -----------------------------------------------------------------------------
// 숫자만 가져 오기
// @return : String
// -----------------------------------------------------------------------------
String.prototype.num = function() {
		return (this.trim().replace(/[^0-9]/g, ""));
},
// -----------------------------------------------------------------------------
// 숫자에 3자리마다 , 를 찍어서 반환
// @return : String
//-----------------------------------------------------------------------------
String.prototype.money = function() {
		var num = this.trim();
		while((/(-?[0-9]+)([0-9]{3})/).test(num)) {
				num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
		}
		return num;
},
// -----------------------------------------------------------------------------
// 숫자의 자리수(cnt)에 맞도록 반환
// @return : String
//-----------------------------------------------------------------------------
String.prototype.digits = function(cnt) {
		var digit = "";
		if (this.length < cnt) {
				for(var i = 0; i < cnt - this.length; i++) {
						digit += "0";
				}
		}
		return digit + this;
},
// -----------------------------------------------------------------------------
// " -> &#34; ' -> &#39;로 바꾸어서 반환
// @return : String
//-----------------------------------------------------------------------------
String.prototype.quota = function() {
		return this.replace(/"/g, "&#34;").replace(/'/g, "&#39;");
},
// -----------------------------------------------------------------------------
// 파일 확장자만 가져오기
// @return : String
//-----------------------------------------------------------------------------
String.prototype.ext = function() {
		return (this.indexOf(".") < 0) ? "" : this.substring(this.lastIndexOf(".") + 1, this.length);
},

// -----------------------------------------------------------------------------
// URL에서 파라메터 제거한 순수한 url 얻기
// @return : String
// -----------------------------------------------------------------------------
String.prototype.uri = function() {
		var arr = this.split("?");
		arr = arr[0].split("#");
		return arr[0];
},


/* ---------------------------------------------------------------------------------
   각종 체크 함수들
 * ---------------------------------------------------------------------------------*/
// -----------------------------------------------------------------------------
// 정규식에 쓰이는 특수문자를 찾아서 이스케이프 한다.
// @return : String
//-----------------------------------------------------------------------------
String.prototype.meta = function() {
		var str = this;
		var result = "";
		for(var i = 0; i < str.length; i++) {
				if((/([\$\(\)\*\+\.\[\]\?\\\^\{\}\|]{1})/).test(str.charAt(i))) {
						result += str.charAt(i).replace((/([\$\(\)\*\+\.\[\]\?\\\^\{\}\|]{1})/), "\\$1");
				}
				else {
						result += str.charAt(i);
				}
		}
		return result;
},
// -----------------------------------------------------------------------------
// 정규식에 쓰이는 특수문자를 찾아서 이스케이프 한다.
// @return : String
// -----------------------------------------------------------------------------
String.prototype.remove = function(pattern) {
		return (pattern == null) ? this : eval("this.replace(/[" + pattern.meta() + "]/g, \"\")");
},

// -----------------------------------------------------------------------------
// 최소 최대 길이인지 검증
// str.isLength(min [,max])
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isLength = function() {
		var min = arguments[0];
		var max = arguments[1] ? arguments[1] : null;
		var success = true;
		if(this.length < min) {
				success = false;
		}
		if(max && this.length > max) {
				success = false;
		}
		return success;
},

// -----------------------------------------------------------------------------
// 숫자로 구성되어 있는지 학인
// arguments[0] : 허용할 문자셋
// @return : boolean
//-----------------------------------------------------------------------------
String.prototype.isNum = function() {
		return (/^[0-9]+$/).test(this.remove(arguments[0])) ? true : false;
},
// -----------------------------------------------------------------------------
// 영어만 허용 - arguments[0] : 추가 허용할 문자들
// @return : boolean
//-----------------------------------------------------------------------------
String.prototype.isEng = function() {
		return (/^[a-zA-Z]+$/).test(this.remove(arguments[0])) ? true : false;
},
// -----------------------------------------------------------------------------
// 숫자와 영어만 허용 - arguments[0] : 추가 허용할 문자들
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isEngNum = function() {
		return (/^[0-9a-zA-Z]+$/).test(this.remove(arguments[0])) ? true : false;
},
// -----------------------------------------------------------------------------
// 숫자와 영어만 허용 - arguments[0] : 추가 허용할 문자들
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isNumEng = function() {
		return this.isEngNum(arguments[0]);
},
// -----------------------------------------------------------------------------
// 아이디 체크 영어와 숫자만 체크 첫글자는 영어로 시작 - arguments[0] : 추가 허용할 문자들
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isUserid = function() {
		return (/^[a-zA-z]{1}[0-9a-zA-Z]+$/).test(this.remove(arguments[0])) ? true : false;
},
//-----------------------------------------------------------------------------
// 한글 체크 - arguments[0] : 추가 허용할 문자들
// @return : boolean
//-----------------------------------------------------------------------------
String.prototype.isKor = function() {
		return (/^[가-힣]+$/).test(this.remove(arguments[0])) ? true : false;
},

String.prototype.isKorNum = function() {
	return (/^[0-9가-힣\s]+$/).test(this.remove(arguments[0])) ? true : false;
},

// -----------------------------------------------------------------------------
// 주민번호 체크 - arguments[0] : 주민번호 구분자
// XXXXXX-XXXXXXX
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isJumin = function() {
		var arg = arguments[0] ? arguments[0] : "";
		var jumin = eval("this.match(/[0-9]{2}[01]{1}[0-9]{1}[0123]{1}[0-9]{1}" + arg + "[1234]{1}[0-9]{6}$/)");
		if(jumin == null) {
				return false;
		}
		else {
				jumin = jumin.toString().num().toString();
		}
		// 생년월일 체크
		var birthYY = (parseInt(jumin.charAt(6)) == (1 ||2)) ? "19" : "20";
		birthYY += jumin.substr(0, 2);
		var birthMM = jumin.substr(2, 2) - 1;
		var birthDD = jumin.substr(4, 2);
		var birthDay = new Date(birthYY, birthMM, birthDD);
		if(birthDay.getYear() % 100 != jumin.substr(0,2) || birthDay.getMonth() != birthMM || birthDay.getDate() != birthDD) {
				return false;
		}
		var sum = 0;
		var num = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
		var last = parseInt(jumin.charAt(12));
		for(var i = 0; i < 12; i++) {
				sum += parseInt(jumin.charAt(i)) * num[i];
		}
		return ((11 - sum % 11) % 10 == last) ? true : false;
},
// -----------------------------------------------------------------------------
// 외국인 등록번호 체크 - arguments[0] : 등록번호 구분자
// XXXXXX-XXXXXXX
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isForeign = function() {
		var arg = arguments[0] ? arguments[0] : "";
		var jumin = eval("this.match(/[0-9]{2}[01]{1}[0-9]{1}[0123]{1}[0-9]{1}" + arg + "[5678]{1}[0-9]{1}[02468]{1}[0-9]{2}[6789]{1}[0-9]{1}$/)");
		if(jumin == null) {
				return false;
		}
		else {
				jumin = jumin.toString().num().toString();
		}
		// 생년월일 체크
		var birthYY = (parseInt(jumin.charAt(6)) == (5 || 6)) ? "19" : "20";
		birthYY += jumin.substr(0, 2);
		var birthMM = jumin.substr(2, 2) - 1;
		var birthDD = jumin.substr(4, 2);
		var birthDay = new Date(birthYY, birthMM, birthDD);
		if(birthDay.getYear() % 100 != jumin.substr(0,2) || birthDay.getMonth() != birthMM || birthDay.getDate() != birthDD) {
				return false;
		}
		if((parseInt(jumin.charAt(7)) * 10 + parseInt(jumin.charAt(8))) % 2 != 0) {
				return false;
		}
		var sum = 0;
		var num = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
		var last = parseInt(jumin.charAt(12));
		for(var i = 0; i < 12; i++) {
				sum += parseInt(jumin.charAt(i)) * num[i];
		}
		return (((11 - sum % 11) % 10) + 2 == last) ? true : false;
},
// -----------------------------------------------------------------------------
// 사업자번호 체크 - arguments[0] : 등록번호 구분자
// XX-XXX-XXXXX
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isBiznum = function() {
		var arg = arguments[0] ? arguments[0] : "";
		var biznum = eval("this.match(/[0-9]{3}" + arg + "[0-9]{2}" + arg + "[0-9]{5}$/)");
		if(biznum == null) {
				return false;
		}
		else {
				biznum = biznum.toString().num().toString();
		}
		var sum = parseInt(biznum.charAt(0));
		var num = [0, 3, 7, 1, 3, 7, 1, 3];
		for(var i = 1; i < 8; i++) sum += (parseInt(biznum.charAt(i)) * num[i]) % 10;
		sum += Math.floor(parseInt(parseInt(biznum.charAt(8))) * 5 / 10);
		sum += (parseInt(biznum.charAt(8)) * 5) % 10 + parseInt(biznum.charAt(9));
		return (sum % 10 == 0) ? true : false;
},
// -----------------------------------------------------------------------------
// 법인 등록번호 체크 - arguments[0] : 등록번호 구분자
// XXXXXX-XXXXXXX
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isCorpnum = function() {
		var arg = arguments[0] ? arguments[0] : "";
		var corpnum = eval("this.match(/[0-9]{6}" + arg + "[0-9]{7}$/)");
		if(corpnum == null) {
				return false;
		}
		else {
				corpnum = corpnum.toString().num().toString();
		}
		var sum = 0;
		var num = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
		var last = parseInt(corpnum.charAt(12));
		for(var i = 0; i < 12; i++) {
				sum += parseInt(corpnum.charAt(i)) * num[i];
		}
		return ((10 - sum % 10) % 10 == last) ? true : false;
},
// ----------------------------------------------------------------------------
// 이메일의 유효성을 체크
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isEmail = function() {
		return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(this.trim());
},
// -----------------------------------------------------------------------------
// 전화번호 체크 - arguments[0] : 전화번호 구분자
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isPhone = function() {
		var arg = arguments[0] ? arguments[0] : "";
		return eval("(/(02|0[3-9]{1}[0-9]{1})" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");
},
// -----------------------------------------------------------------------------
// 핸드폰번호 체크 - arguments[0] : 핸드폰 구분자
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isMobile = function() {
		var arg = arguments[0] ? arguments[0] : "";
		return eval("(/01[016789]" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");
},

// modified : shaby
// modified_date : 2007-05-14
// -----------------------------------------------------------------------------
// IP의 유효성 체크
// @return : boolean
// -----------------------------------------------------------------------------
String.prototype.isValidIP = function() {
	if(this.isBlank()) return false;

	var ipChk_ret1;
	var ipChk_ret2;

	ipChk_ret1=this.match(/^([0-9]\.|[1-9][0-9]\.|1[0-9][0-9]\.|2[0-4][0-9]\.|25[0-5]\.)([0-9]\.|[1-9][0-9]\.|1[0-9][0-9]\.|2[0-4][0-9]\.|25[0-5]\.)([0-9]\.|[1-9][0-9]\.|1[0-9][0-9]\.|2[0-4][0-9]\.|25[0-5]\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/);
	ipChk_ret2=this.match(/^10\.|^(172\.16\.)|^(172\.31\.)|^(192\.168\.)/);

	if(ipChk_ret1 != null && ipChk_ret2 == null)
	{
		return true;
	}
	return false;
},
// -----------------------------------------------------------------------------
// 공백이나 널인지 확인
// @return : boolean
//-----------------------------------------------------------------------------
String.prototype.isBlank = function() {
		var str = this.trim();
		for(var i = 0; i < str.length; i++) {
				if ((str.charAt(i) != "\t") && (str.charAt(i) != "\n") && (str.charAt(i)!="\r")) {
						return false;
				}
		}
		return true;
},


//-----------------------------------------------------------------------------
//문자열을 byte 배열로 리턴한다.
//@return : Array
//-----------------------------------------------------------------------------
String.prototype.stringToBytes = function() {
	var str = this;
	var ch, st, re = [], j=0;
	for (var i = 0; i < str.length; i++ ) {
	    ch = str.charCodeAt(i);
	    if(ch < 127)
	    {
	        re[j++] = ch & 0xFF;
	    }
	    else
	    {
	        st = [];    // clear stack
	        do {
	            st.push( ch & 0xFF );  // push byte to stack
	            ch = ch >> 8;          // shift value down by 1 byte
	        }
	        while ( ch );
	        // add stack contents to result
	        // done because chars have "wrong" endianness
	        st = st.reverse();
	        for(var k=0;k<st.length; ++k)
	            re[j++] = st[k];
	    }
	}
	// return an array of bytes
	return re;
},
//-----------------------------------------------------------------------------
//해당스트링의 바이트단위 길이를 리턴합니다. (기존의 length 속성은 2바이트 문자를 한글자로 간주합니다)
//@return : int
//-----------------------------------------------------------------------------
String.prototype.byte = function() {
	var str = this;
        var length = 0;
	for(var i = 0; i < str.length; i++)
	{
		if(escape(str.charAt(i)).length >= 4)
			length += 2;
		else if(escape(str.charAt(i)) == "%A7")
			length += 2;
		else
			if(escape(str.charAt(i)) != "%0D")
				length++;
	}
        return length;
},
//-----------------------------------------------------------------------------
//글자를 앞에서부터 원하는 바이트만큼 잘라 리턴합니다.
//한글의 경우 2바이트로 계산하며, 글자 중간에서 잘리지 않습니다.
//@return : String
//-----------------------------------------------------------------------------
String.prototype.cutByte = function(len) {
	var str = this;
	var count = 0;

	for(var i = 0; i < str.length; i++) {
		if(escape(str.charAt(i)).length >= 4)
			count += 2;
		else
			if(escape(str.charAt(i)) != "%0D")
				count++;


		if(count >  len) {
			if(escape(str.charAt(i)) == "%0A")
				i--;
			break;
		}
	}
	return str.substring(0, i);
},
//-----------------------------------------------------------------------------
//replace All
//@return : String
//-----------------------------------------------------------------------------
String.prototype.replaceAll = function(oldStr, newStr){
	var str = this;
	return str.split(oldStr).join(newStr);
};
