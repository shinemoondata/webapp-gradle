/*
 파일명 : javascript.js
 설  명 : 공통 JavaScript
 작성자 : shaby
 작성일 : 2009.07.29
 수정일 :
 */



var errCode = {list:[
	{code:"DB-901", msg:"중복 키값이 존재합니다."},
	{code:"DB-902", msg:"필수 값이 존재하지 않습니다."},
	{code:"DB-999", msg:"실패했습니다."},
	{code:"1", msg:"정상 처리되었습니다."}
]};



var Msg = {
	succ:"성공했습니다.",
	fail:"실패하였습니다.\n담당자에게 문의 바랍니다.",
	saveok:"저장에 성공했습니다.",
	cancel:"취소되었습니다.",
	submit:"제출되었습니다.",
	savefail:"저장에 실패하였습니다.\n담당자에게 문의 바랍니다.",
	ins:"등록하시겠습니까?",
	tail_ins:"댓글을 등록하시겠습니까?",
	upd:"수정하시겠습니까?",
	tail_upd:"댓글을 수정하시겠습니까?",
	del:"정말로 삭제하시겠습니까?",
	tail_del:"댓글을 정말로 삭제하시겠습니까?",
	msg01:"선택한 파일을 업로드 하시겠습니까?",
	msg02:"올바른 파일형식이 아닙니다.",
	msg03:"이미지를 업로드 해 주세요.",
	msg04:"이미지를 삽입하지 않으셨습니다. 창을 닫으시겠습니까?",
	msg05:"창을 닫으시겠습니까?",
	msg06:"클릭하시면 이미지가 본문에 삽입됩니다.",
	msg07:"클릭하시면 파일이 본문에 삽입됩니다.",
	msg08:"파일을 첨부하지 않으셨습니다. 창을 닫으시겠습니까?",
	msg09:"파일을 업로드 해 주세요.",
	msg10:"창을 닫으시겠습니까?",
	msg11:"주소를 선택하지 않으셨습니다.주소를 선택해 주세요.",
	existFile:"동일명의 파일이 존재합니다.\n\n다시 등록해 주시기 바랍니다.",
	validFile:"\n\n업로드 가능한 형식) 문서화일과 이미지파일 및 압축파일이 가능합니다."
};

var min = 0;
var max = 0;



var extImgArr = ["jpg","gif","png","bmp","avi","wmv","mov","swf","flv","mpg","mpeg"];
var extFileArr = ["zip","rar","7z","alz","doc","xls" ,"ppt","docx","xlsx","pptx","hwp","txt","pdf","jpg","gif","png","bmp","avi","wmv","mov","swf","flv","mpg","mpeg"];
var han = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ";
var alpha = "abcdefghijklmnopqrstuvwxyz";

var chkNumber=0;
var bl=false;
function AllCheckbox(check) {
	chkNumber++;
	if(chkNumber%2==0) bl = false;
	else bl=true;
	try{
		if(check.length =='undefined' || check.length==null){
			check.checked = bl;
		}else{
			for (i = 0; i < check.length; i++) {
				check[i].checked = bl;
			}
		}
	}catch(e){}
}

function Keycode(e){
	var result;
	if(window.event)
		result = window.event.keyCode;
	else if(e)
		result = e.which;
	return result;
}



/*
 메세지 처리
 */
function errMsg(code){
	try {
		var rtn = "";
		for(var i=0;i<errCode.list.length; i++){
			if(errCode.list[i].code == code){
				rtn = errCode.list[i].msg;
			}
		}

	} catch (e) {
		alert(e);
	}
	return rtn;
}


/*
 달력 값 초기화
 */
function clearCal(obj){
	$("#"+obj).attr("value","");
}

/*
 * 팝업 자동 리사이징
 *  - 윈도 환경에 따라 사이즈가 다를 수 있습니다.
 *  - 팝업페이지의 스크립트 최하단에서 실행하십시오.
 *
 * (ex.) window.onload = function(){popupAutoResize();}
 */
function popupAutoResize() {
	var thisX = parseInt(document.body.offsetWidth);
	var thisY = parseInt(document.body.offsetHeight);
	var maxThisX = screen.width - 50;
	var maxThisY = screen.height - 50;
	var marginY = 0;


	//document.write("임시 브라우저 확인 : " + navigator.userAgent);
	// 브라우저별 높이 조절. (표준 창 하에서 조절해 주십시오.)
	if (navigator.userAgent.indexOf("MSIE 6") > 0) marginY = 45;        // IE 6.x
	else if(navigator.userAgent.indexOf("MSIE 7") > 0) marginY = 75;    // IE 7.x
	else if(navigator.userAgent.indexOf("MSIE 8") > 0) marginY = 85;    // IE 8.x
	else if(navigator.userAgent.indexOf("MSIE 9") > 0) marginY = 85;    // IE 9.x
	else if(navigator.userAgent.indexOf("Firefox") > 0) marginY = 50;   // FF
	else if(navigator.userAgent.indexOf("Opera") > 0) marginY = 30;     // Opera
	else if(navigator.userAgent.indexOf("Netscape") > 0) marginY = -2;  // Netscape
	else if(navigator.userAgent.indexOf("Chrome") > 0) thisX = thisX-2;  // Netscape
	else thisX -= 2;    // etc
	if (thisX > maxThisX) {
		window.document.body.scroll = "yes";
		thisX = maxThisX+20;
	}
	window.resizeTo(thisX+10);


}


function BrowserHeight(){
	var thisX = parseInt(document.body.scrollWidth);
	var thisY = parseInt(document.body.scrollHeight);
	var maxThisX = screen.width - 50;
	var maxThisY = screen.height - 50;
	var marginY = 0;
	//alert(thisX + "===" + thisY);
	//alert("임시 브라우저 확인 : " + navigator.userAgent.indexOf("Opera"));
	// 브라우저별 높이 조절. (표준 창 하에서 조절해 주십시오.)
	if(navigator.userAgent.indexOf("MSIE 8") > -1) marginY = 77;    // IE 8.x
	else if(navigator.userAgent.indexOf("MSIE 7") > -1) marginY = 77;    // IE 7.x
	else if(navigator.userAgent.indexOf("MSIE 6") > -1) marginY = 49;        // IE 6.x
	else if(navigator.userAgent.indexOf("Chrome") > -1) marginY = 64;  // Chrome
	else if(navigator.userAgent.indexOf("Safari") > -1) marginY = 38;     // Safari
	else if(navigator.userAgent.indexOf("Firefox") > -1) marginY = 87;   // FF
	else if(navigator.userAgent.indexOf("Opera") > -1) marginY = 53;     // Opera
	else marginY = 77;  // etc


	if (thisX > maxThisX) {
		window.document.body.scroll = "yes";
		thisX = maxThisX;
	}
	if (thisY > maxThisY - marginY) {
		window.document.body.scroll = "yes";
		thisX += 19;
		thisY = maxThisY - marginY;
	}
	return thisY+marginY;

}
/*
 현재 domain 가져오기
 */
function host(){
	var Dns;
	Dns = location.href;
	Dns = Dns.split("//");
	Dns = Dns[1].substr(0,Dns[1].indexOf("/"));
	return "http://" + Dns;
}
function fnDownload(real,vir)
{
	var home=host();
	document.FileDownloadForm.appfile_name.value = real;
	document.FileDownloadForm.virfile_name.value = vir;
	procSubmit(document.FileDownloadForm,"/common/download.action","ifm");
	//location.href=home+"/common/download.action?appfile_name="+encodeURIComponent(real)+"&virfile_name="+vir;
}
function encodeutf(string) {
	string = string.replace(/\r\n/g,"\n");
	var utftext = "";

	for (var n = 0; n < string.length; n++) {

		var c = string.charCodeAt(n);

		if (c < 128) {
			utftext += String.fromCharCode(c);
		}
		else if((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		}
		else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}

	}

	return utftext;
}


/*
 이미지 첨부하기
 */
function attachimage(obj,w){
	var sHTML = "<img src=\""+obj.src+"\" alt=\"첨부이미지\" width=\""+w+"px\" />" ;
	return sHTML;
}
/*
 파일 첨부하기
 */
function attachfile(obj){
	var home=host();
	var sHTML = "<img src='/images/board_fileicon.gif' alt='attach file' >&nbsp;[<a href=\"javascript:fnDownload('"+obj.options[obj.selectedIndex].text+"','"+obj.options[obj.selectedIndex].value+"');\">"+obj.options[obj.selectedIndex].text+"</a>]&nbsp;" ;

	return sHTML;
}
/*
 파일 삭제하기
 */
function deleteAttachFile(){
	var obj = document.getElementById("file_list");
	if(checkFileList(obj) ){
		document.getElementById("appfile_seq").value = obj.options[obj.selectedIndex].title;
		url = "/common/deleteFile.action";
		obj.options[obj.selectedIndex] = null;
		if (arguments[0]){
			procSubmit(arguments[0],url,"ifm");
		}else{
			procSubmit(document.frmObj,url,"ifm");
		}
	}
}


function checkFileList(obj){
	if(obj.length == 0){
		alert("데이터가 존재하지 않습니다.");
		return false;
	}else if (obj.value == "" ){
		alert("데이터를 선택해 주셔야 합니다.");
		return false;
	}
	return true;
}

function removeTags(content){
	str = content;
	str = str.replace(new RegExp("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>","gim"), "").substr(0,15);
	str.replace(new RegExp("&nbsp;","gim")," ");
	return str;
}
function add_attach(real,vir,appfile_seq)
{
	var isExistFile = false;
	var result = document.getElementById("file_list");
	for(var f=0;f<result.length;f++){
		if(result.options[f].text == real){
			isExistFile = true;
		}
	}
	if (isExistFile == false){
		var obj_node = document.createElement("option");
		var text=document.createTextNode(real);
		obj_node.setAttribute("value",vir);
		obj_node.setAttribute("title",appfile_seq);
		var txt=obj_node.appendChild(text);
		result.appendChild(obj_node);
	}else{
		//alert("같은 이름의 파일이 존재합니다.");
	}
}

/*
 허용가능한 파일 목록
 */
function isAllowFile(obj){
	return isAllowFileExt(obj, "file");
}
function isAllowImg(obj){
	return isAllowFileExt(obj, "image");
}

function ArrToString(type){
	rtn = "";
	if (type == "image"){
		for (i=0; i< extImgArr.length; i++){
			if (i == extImgArr.length-1){
				rtn = rtn + extImgArr[i] ;
			}else{
				rtn = rtn + extImgArr[i] +",";
			}
		}
	}else{
		for (i=0; i< extFileArr.length; i++){
			if (i == extFileArr.length-1){
				rtn = rtn + extFileArr[i] ;
			}else{
				rtn = rtn + extFileArr[i] +",";
			}
		}
	}
	return rtn;
}

function isAllowFileExt(obj, type){

	var ext =(obj.value.indexOf(".") < 0) ? "" : obj.value.substring(obj.value.lastIndexOf(".") + 1, obj.value.length);
	if(ext.length > 0){
		ext = ext.toLowerCase();
		if (type == "image"){
			for (i=0; i< extImgArr.length; i++){
				if (ext == extImgArr[i]){
					return true;
				}
			}
			return false;

		}else{

			for (i=0; i< extFileArr.length; i++){
				if (ext == extFileArr[i]){
					return true;
				}
			}
			return false;
		}
	}else{
		return false;
	}
}
/*
 팝업창 Function 위치는 정 중앙
 */
function open_win(URL, w, h, scb,title){
	postPopup(URL, w, h, scb,title);
	/*	var arr = new Array();
	 arr.push("error");
	 sx = (screen.width - w)/2;
	 sy = (screen.height - h)/2 ;
	 var rtnVal = window.open(URL, title , 'fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,resizable=no,scrollbars='+scb+',width='+w+',height='+h+',top='+sy+',left='+sx);
	 */
	//var rtnVal = window.showModalDialog(URL,window,'dialogWidth:'+w+'px; dialogHeight:'+h+'px;');
	//if(typeof(rtnVal) != 'undefined'){
//		return rtnVal;
//	}else{
//		return arr;
//	}
}
/*
 팝업창 Function 위치는 정 중앙
 */
function WindowOpen(URL,title, w, h,sx,sy, scb){
	sub = window.open(URL, title , 'fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,resizable=no,scrollbars='+scb+',width='+w+',height='+h+',top='+sy+',left='+sx);
}


/*
 메세지 처리
 */
function Msg(){
	if (arguments[0] != null ) {
		alert(arguments[0]);
	}
}

/*
 메세지 처리및 페이지 이동
 */
function MsgGo(){
	if (arguments[0] != null ) {
		alert(arguments[0]);
	}
	if(arguments[1] != null ) {
		location.href= arguments[1];
	}
}


/*
 폼액션의 Submit 처리
 */
function procSubmit(obj){
	if (arguments[0] != null ) {
		var FormAction = arguments[1] ? arguments[1] : '';
		var FormTarget = arguments[2] ? arguments[2] : '';

		obj.target = FormTarget;
		obj.action = FormAction;
		obj.submit();
	}
}


/*
 셀렉트박스의 자동선택
 */
function selectOptions(TmpObj,TmpVal){
	var Obj = document.getElementById(TmpObj);
	if(Obj && TmpVal){
		for(i=0; i<Obj.length; i++) if(Obj.options[i].value==TmpVal) Obj.options[i].selected=true;
	}
}
/*
 라디오버튼의 자동선택
 */
function selectRadios(TmpObj,TmpVal){
	$("input[type=radio][name='"+TmpObj+"']").each(function(){
		if($(this).val() == TmpVal) {
			$(this).attr('checked','checked');
		}
	});
}

function selectCheckBox(TmpObj,TmpVal){
	var objArray = [];
	var Obj = document.getElementsByTagName('input');
	var c = 0;
	for (var i=0;i<Obj.length;i++){
		if(Obj[i].getAttribute("type")=="checkbox"){
			objArray[c] = Obj[i].getAttribute("name");
			if(objArray[c] == TmpObj){
				ArrValue=TmpVal.split(',');
				for(s=0;s<ArrValue.length; s++){
					if(Obj[i].value==ArrValue[s]) Obj[i].checked = true;
				}
			}
			c++;
		}
	}
}


/*
 라디오버튼의 선택유무
 */
function validRadiobox(TmpObj){
	var Obj = document.getElementsByTagName('input');
	var c = 0;
	for (var i=0;i<Obj.length;i++){
		if(Obj[i].getAttribute("type")=="radio" ){
			if(Obj[i].getAttribute("name") == TmpObj){
				if(Obj[i].checked == true) {
					c++;
				}
			}
		}
	}
	return c;
}
/*
 체크박스의 선택유무
 */
function validCheckbox(TmpObj){
	var Obj = document.getElementsByTagName('input');
	var c = 0;
	for (var i=0;i<Obj.length;i++){
		if(Obj[i].getAttribute("type")=="checkbox" ){
			if(Obj[i].getAttribute("name") == TmpObj){
				if(Obj[i].checked == true) {
					c++;
				}
			}
		}
	}
	return c;
}


/*
 html tag 의 갯수 구하기
 ex) var tagCount = getTagNameSize("img","divNews");
 -> 이미지 태그 중에서 이름이 divNews 인 갯수 구하기
 */
function getTagNameSize(TagName,AttrName){
	var Obj = document.getElementsByTagName(TagName);
	var count = 0;
	for (var i=0;i<Obj.length;i++){
		if(Obj[i].getAttribute("name") == AttrName){
			count++;
		}
	}
	return count;
}

/*
 태그의 display 여부를 결정
 ex) onclick = displayDiv(this,'DivNews2');
 -> 호출한 태그가 제어하는 또다른 태그의 id가 divNews2인 것을  display 함
 */
function ShowTag(thisobj,ShowTagName){
	var tabsize= getTagNameSize(thisobj.tagName,thisobj.name);
	var currentTag = ShowTagName.substring(0,ShowTagName.length-1);

	for (i = 1 ; i <= tabsize; i++){
		document.getElementById(currentTag + i).style.display = "none";
	}
	document.getElementById(ShowTagName).style.display = "block";

}


function findPosX(obj){
	var curleft = 0;
	if(obj.offsetParent){
		while(obj.offsetParent){
			curleft += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	}else if(obj.x) {
		curleft += obj.x;
	}
	return curleft;
}



function findPosY(obj){
	var curtop = 0;
	if(obj.offsetParent){
		while(obj.offsetParent){
			curtop += obj.offsetTop;
			obj = obj.offsetParent;
		}
	}else if(obj.y) {
		curtop += obj.y;
	}
	return curtop;
}

//한글 처리
//<input type="text" name="id" onKeyPress="hangul(event);">
function hangul(e)
{
	if(window.event){

		if((window.event.keyCode < 12592) || (window.event.keyCode > 12687)){
			window.event.returnValue = false;
		}
	}else if(e){
		if((e.which < 12592) || (e.which > 12687)){
			e.preventDefault();
		}
	}

}
//숫자 처리
//<input type="text" name="id" id="id" onKeyup="onlyDigit(this);">
function onlyDigit(el){
	el.value = el.value.replace(/\D/g,'');
}
//숫자 처리
//<input type="text" name="id" id="id" onKeyup="onlyDigit(this);">
function onlyDigit2(el,pat){
	if (el.value.isNum(pat)){
		el.value = el.value;
	}else {
		el.value = "";
	}

}
function CheckedRadios(TmpObj){
	var Obj = document.getElementsByTagName('input');

	for (var i=0;i<Obj.length;i++){
		if(Obj[i].getAttribute("type")=="radio" && Obj[i].getAttribute("name") == TmpObj && Obj[i].checked ==true ){
			return true;
		}
	}
	return false;
}


//현재 날짜 구하기
function getDate(){
	time=new Date(); // 현재시간 가져오기
	year=time.getFullYear(); // 년도 가져오기
	month=time.getMonth()+1; // 월 가져오기 (+1)
	day=time.getDate(); // 날짜 가져오기

	if (("" + month).length == 1) { month = "0" + month; }
	if (("" + day).length   == 1) { day   = "0" + day;   }
	if ( arguments[0] == null){
		sep = "-";
		return year+sep+month+sep+day;
	}else{
		sep =arguments[0];
		return year+sep+month+sep+day;
	}
}


function getAddDay(day, addend) {
	// 날짜를 가져온다.
	// 일자를 구해서 몇 일을 더한다.
	var tdate = day.getDate() + addend;
	// 결과 날짜를 세팅한다. 월 넘김은 자동으로 계산됨

	time=new Date(day.getYear(), day.getMonth(), tdate);

	year=time.getFullYear(); // 년도 가져오기

	month=time.getMonth()+1; // 월 가져오기 (+1)
	days=time.getDate(); // 날짜 가져오기


	if (("" + month).length == 1) { month = "0" + month; }
	if (("" + days).length   == 1) { days   = "0" + days;   }

	if ( arguments[2] == null){
		sep = "-";
		return year+sep+month+sep+days;
	}else{
		sep =arguments[2];
		return year+sep+month+sep+days;
	}
}


function getCookie( name ){
	var nameOfCookie = name + "=";
	var x = 0;

	while ( x <= document.cookie.length )
	{
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 ){
				endOfCookie = document.cookie.length;
			}
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 ){
			break;
		}
	}
	return "";
}


function setCookie( name, value )
{
	var expiredays = 7;
	if (arguments[2] != null){
		expiredays = arguments[2];
	}
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}


function CallAjax(url, param, callback_function){
	$.ajax({type:"POST",
		async:true,
		dataType: "json",
		url:url,
		data:param,
		success:function(data){
			typeof callback_function == 'string' ? eval(callback_function+"(data)") : callback_function(data);
		},
		error:function(err){ }//alert(err);  }
	});
}
function CallAjaxSync(url, param, callback_function){
	$.ajax({type:"POST",
		async:false,
		dataType: "json",
		url:url,
		data:param,
		success:function(data){
			typeof callback_function == 'string' ? eval(callback_function+"(data)") : callback_function(data);
		},
		error:function(err){ }//alert(err);  }
	});
}

function CrossAjax(url, data, callback_function){
	$.support.cors = true;
	$.ajax({type:"GET",
		crossDomain: true,
		dataType: "jsonp",
		url:url,
		data:data,
		jsonp : callback_function,
		async:false,
		success: function( data ) {
			typeof callback_function == 'string' ? eval(callback_function+"(data)") : callback_function(data);
			//alert("sccess : " + data );
		},
		error: function( jqXHR, textStatus, errorThrown ) {
			//alert("err:"+ textStatus + ", " + errorThrown );
		}
	});
}

function fn_GetValue(key, type)
{
	if(type)
	{
		if(type.toUpperCase() == 'ID')
		{
			return $('#'+key).val();
		}
		else if(type.toUpperCase() == 'NAME')
		{
			return $('input[name='+key+']').val();
		}
		else
		{
			try{
				return $('#'+key).val();
			}
			catch(e){return "";}
		}
	}
	else
	{
		try{
			return $('#'+key).val();
		}
		catch(e){return "";}
	}
}

function fn_SetValue(key, value, type)
{
	if(type)
	{
		if(type.toUpperCase() == 'ID')
		{
			$('#'+key).val(value);
		}
		else if(type.toUpperCase() == 'NAME')
		{
			$('input[name='+key+']').val(value);
		}
		else
		{
			try{
				$('#'+key).val(value);
			}
			catch(e){}
		}
	}
	else
	{
		try{
			$('#'+key).val(value);
		}
		catch(e){}
	}
}

function fn_FormQueryStringEnc(name)
{
	return FormQueryStringEnc(((typeof name) == 'object') ? name : document.forms[name]);
}


/**
 * 길이 리턴
 * @param input
 * @return
 */
function getByteLength(input) {
	var byteLength = 0;
	for (var inx = 0; inx < input.length; inx++) {
		var oneChar = escape(input.charAt(inx));
		if ( oneChar.length == 1 ) {
			byteLength ++;
		} else if (oneChar.indexOf("%u") != -1) {
			byteLength += 3;
		} else if (oneChar.indexOf("%") != -1) {
			byteLength += oneChar.length/3;
		}
	}
	return byteLength;
}

function fn_len(id, max, msg) {
	if(id.val().byte() <= max){
		$('#' + id.attr('id') + '_LEN').val(getByteLength(id.val()));
		return true;
	}else{
		if(msg)
		{
			alert(msg + ' [' + max + ' Byte]');
		}
		else
		{
			alert('입력범위를 초과했습니다. [' + max + ' Byte]');
		}
		var str = id.val();
		id.val(str.cutByte(max));
		$('#' + id.attr('id') + '_LEN').val(getByteLength(id.val()));
		return false;
	}
}
function fn_lenRange(id, min, max, msg) {
	var len = id.val().byte();
	if(len <= max){
		if(len < min)
		{
			alert(msg + '의 최소 입력범위에 부족합니다. [' + min + ' ~ ' + max + ' Byte]');
			return false;
		}
		else
		{
			$('#' + id.attr('id') + '_LEN').val(len);
			return true;
		}
	}else{
		alert(msg + '의 입력범위를 초과했습니다. [' + min + ' ~ ' + max + ' Byte]');
		var str = id.val();
		id.val(str.cutByte(max));
		$('#' + id.attr('id') + '_LEN').val(len);
		return false;
	}
}

function limitCharacters(textid, limit, limitid){
	var text = $('#'+textid).val();     // 잆력 값 저장
	var textlength = text.length;     // 입력값 길이 저장
	if(textlength > limit){
		$('#'+textid).val(text.cutByte(max));         // 제한 글자 길이만큼 값 재 저장
		return false;
	}else{
		$('#' + limitid).val(textlength);
		return true;
	}
}

/**
 * 콤보박스의 선택
 * obj : 콤보박스 obj
 * selVal : 선택 할 값
 * @param obj
 * @param selVal
 * @return
 */
function cf_setSelBox(obj, selVal){
	for(var i=0; i<obj.length; i++){
		if(obj.options[i].value == selVal){
			obj.selectedIndex = i;
		}
	}
}

/**
 * 콤보박스의 선택 값 리턴
 * @param obj
 * @return
 */
function cf_getSelBox(obj){
	var result = "";
	try{
		result = obj.options[obj.selectedIndex].value;
	}catch(e){
		result = "";
	}

	return result;
}

/**
 * 체크박스의 값 선택
 * @param obj
 * @param selVal
 * @return
 */
function cf_setCheckBox(obj, selVal){
	for(var i=0; i<obj.length; i++){
		if(obj[i].value == selVal){
			obj[i].checked = true;
		}else{
			obj[i].checked = false;
		}
	}
}

/**
 * 체크박스의 값 리턴
 * @param obj
 * @return
 */
function cf_getCheckBox(obj){
	var val;

	for(var i=0; i<obj.length; i++){
		if(obj[i].checked){
			val = obj[i].value;

			break;
		}
	}

	return val;
}
function parentResize(idx){
	var p = "Iframe_divIBTabItem_" + myIBTab.FindTabTitle(idx);
	var ppp = document.getElementById(p);

	var max = ppp.contentWindow.document.body.offsetHeight;

	ppp.style.height = max+40+'px';

	var divItem = p.substring(7);
	document.getElementById(divItem).style.height = max+40+ 'px';
	document.getElementById("DIV_myIBTab").style.height = max+70+ 'px';
}
function iframeResize(title){

	if(parent.myIBTab.FindTabTitle(title) == parent.myIBTab.GetSelectedIndex())
	{
		var p = "Iframe_divIBTabItem_" + parent.myIBTab.FindTabTitle(title);
		var ppp = parent.document.getElementById(p);

		var max = ppp.contentWindow.document.body.scrollHeight;

		ppp.style.height = max+180+'px';

		var divItem = p.substring(7);
		parent.document.getElementById(divItem).style.height = max+60+ 'px';
		parent.document.getElementById("DIV_myIBTab").style.height = max+90+ 'px';
	}
}
function normalResize(iframeId){
	var ppp = parent.document.getElementById(iframeId);

	var max = ppp.contentWindow.document.body.offsetHeight;
	var max2= ppp.contentWindow.document.body.scrollHeight;
	ppp.style.height = max2+60+'px';
}

function iResize(){
	var iFrames = document.getElementsByTagName('iframe');  // Resize heights.
	// Iterate through all iframes in the page.
	max = 0;
	for (var i = 0, j = iFrames.length; i < j; i++) {
		if(max <iFrames[i].contentWindow.document.body.offsetHeight) {
			max = iFrames[i].contentWindow.document.body.offsetHeight;
		}
	}
	for (var i = 0, j = iFrames.length; i < j; i++) {
		// Set inline style to equal the body height of the iframed content.
		iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight+20+ 'px';
		$('#DIV_myIBTab').removeAttr('height');
		//alert(iFrames[i].id +":"+iFrames[i].contentWindow.document.body.offsetHeight);
		var divItem = iFrames[i].id.substring(7);
		document.getElementById(divItem).style.height = iFrames[i].contentWindow.document.body.offsetHeight+20+ 'px';
		document.getElementById("DIV_myIBTab").style.height = max+50+ 'px';
		$('#DIV_myIBTab').removeAttr('height');
	}
}  // Check if browser is Safari or Opera.



function Left(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else
		return String(str).substring(0,n);
}
function Right(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else {
		var iLen = String(str).length;
		return String(str).substring(iLen, iLen - n);
	}
}

/* 파일사이즈 */
function fn_fileSize(bytes, unit) {
	if(bytes)
	{
		var labels = ['TB', 'GB', 'MB', 'kB', 'b'];
		var measurements = [1099511627776, 1073741824, 1048576, 1024, 1];
		if(unit)
		{
			for(var i=0; i<measurements.length; i++) {
				if(unit.toUpperCase() == labels[i].toUpperCase())
				{
					return (bytes/measurements[i])*10/10+' '+labels[i];
				}
			}
		}
		else
		{
			for(var i=0; i<measurements.length; i++) {
				var conv = bytes/measurements[i];
				if(conv > 1) {
					return Math.round(conv*10)/10+' '+labels[i];
				}
			}
		}
	}
	else
	{
		return '0b';
	}
}

/*
 * POST 로 팝업 띄울때 사용함
 */
var _postPopupSeq = 1000;
function postPopup(url, w, h, scb, target)
{
	try{
		var fName = "dumyForm" + (_postPopupSeq++);

		$('body').append("<form name='"+fName+"' id='"+fName+"' method='post' action='' target=''/>");

		$('#'+fName).children().remove();

		if(url.indexOf("?") == -1)
		{
			$('#'+fName).attr('action', url);
		}
		else
		{
			$('#'+fName).attr('action', url.substr(0, url.indexOf("?")));

			url = url.substr(url.indexOf("?")+1);

			while(url != '')
			{
				if(url.indexOf("&") == -1)
				{
					param = url;
					url = '';
				}
				else
				{
					param = url.substr(0, url.indexOf("&"));
					url = url.substr(url.indexOf("&")+1);
				}
				itemArr = param.split('=');

				if(itemArr.length == 2)
				{
					$('#'+fName).append("<input type='hidden' name='"+itemArr[0]+"' value=''/>");
					$('#'+fName).children().last().val(decodeURIComponent(itemArr[1]));
				}
				else
				{
					$('#'+fName).append("<input type='hidden' name='"+itemArr[0]+"' value=''/>");
				}
			}
		}

		sx = (screen.width - w)/2;
		sy = (screen.height - h)/2;

		if(!target)
		{
			target = "dumyTarget" + (_postPopupSeq++);
		}

		window.open('', target , 'fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,resizable=no,scrollbars='+(scb?scb:'yes')+',width='+w+',height='+h+',top='+sy+',left='+sx);

		$('#'+fName).attr('target', target);

		$('#'+fName).submit();
	}catch(e){
		alert('처리중 오류가 발생했습니다.');
	}
}
function postAction(url, target)
{
	try{

		var fName = "dumyForm" + (_postPopupSeq++);

		$('body').append("<form name='"+fName+"' id='"+fName+"' method='post' action='' target=''/>");

		$('#'+fName).children().remove();

		if(url.indexOf("?") == -1)
		{
			$('#'+fName).attr('action', url);
		}
		else
		{
			$('#'+fName).attr('action', url.substr(0, url.indexOf("?")));

			url = url.substr(url.indexOf("?")+1);

			while(url != '')
			{
				if(url.indexOf("&") == -1)
				{
					param = url;
					url = '';
				}
				else
				{
					param = url.substr(0, url.indexOf("&"));
					url = url.substr(url.indexOf("&")+1);
				}
				itemArr = param.split('=');

				if(itemArr.length == 2)
				{
					$('#'+fName).append("<input type='hidden' name='"+itemArr[0]+"' value=''/>");
					$('#'+fName).children().last().val(decodeURIComponent(itemArr[1]));
				}
				else
				{
					$('#'+fName).append("<input type='hidden' name='"+itemArr[0]+"' value=''/>");
				}
			}
		}

		$('#'+fName).attr('target', target);

		$('#'+fName).submit();
	}catch(e){
		alert('처리중 오류가 발생했습니다.');
	}
}


/**
 * confirm 창
 * width : 넓이
 * height : 높이
 * content : 내용
 * btn_y : y버튼명
 * btn_n : n버튼명
 * callback : callback명
 */
var CONFIRM_ARR = null;
function cf_confirm(width, height, content, btn_y, btn_n, btn_y_style, btn_n_style, callback, cancelYn){
	CONFIRM_ARR = [];
	CONFIRM_ARR["CONTENT"] = content;
	CONFIRM_ARR["BTN_Y"] = btn_y;
	CONFIRM_ARR["BTN_N"] = btn_n;
	CONFIRM_ARR["BTN_Y_STYLE"] = btn_y_style;
	CONFIRM_ARR["BTN_N_STYLE"] = btn_n_style;
	CONFIRM_ARR["CANCEL_YN"] = cancelYn;

	var rtnCall= "?rtn="+callback;
	var url = '/common/popup_confirm.pms'+rtnCall;

	jWindowPopup(url, width, height, 'yes','CONFIRMWIN');
}


/**
 * 사업비의 금액을 원단위로 반환
 * @param mon
 * @return
 */
function cf_getMoney(mon){
	var result = 0;

	result = Math.round(mon * Math.pow(1000,parseInt(1,10)));

	return result;
}


/* CONTEXT MENU 방지 */
document.oncontextmenu = function (){return false;};
/* 마우스 오른쪽 버튼 방지 */
document.onmousedown = function (e){var isNS = (navigator.appName == "Netscape") ? 1 : 0;if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);var myevent = (isNS) ? e : event;var eventbutton = (isNS) ? myevent.which : myevent.button;if((eventbutton==2)||(eventbutton==3)) return false;};
/* 마우스 오른쪽 버튼 방지 */
document.onmouseup = function (e){var isNS = (navigator.appName == "Netscape") ? 1 : 0;if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);var myevent = (isNS) ? e : event;var eventbutton = (isNS) ? myevent.which : myevent.button;if((eventbutton==2)||(eventbutton==3)) return false;};

$(function(){
	/*
	 * this swallows backspace keys on any non-input element.
	 * stops backspace -> back
	 */
	var rx = /INPUT|SELECT|TEXTAREA/i;

	$(document).bind("keydown keypress", function(e){
		if( e.which == 8 ){ // 8 == backspace
			if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
				e.preventDefault();
			}
		}
	});
});


