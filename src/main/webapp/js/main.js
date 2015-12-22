/*
 ���ϸ� : javascript.js
 ��  �� : ���� JavaScript
 �ۼ��� : shaby
 �ۼ��� : 2009.07.29
 ������ :
 */



var errCode = {list:[
	{code:"DB-901", msg:"�ߺ� Ű���� �����մϴ�."},
	{code:"DB-902", msg:"�ʼ� ���� �������� �ʽ��ϴ�."},
	{code:"DB-999", msg:"�����߽��ϴ�."},
	{code:"1", msg:"���� ó���Ǿ����ϴ�."}
]};



var Msg = {
	succ:"�����߽��ϴ�.",
	fail:"�����Ͽ����ϴ�.\n����ڿ��� ���� �ٶ��ϴ�.",
	saveok:"���忡 �����߽��ϴ�.",
	cancel:"��ҵǾ����ϴ�.",
	submit:"����Ǿ����ϴ�.",
	savefail:"���忡 �����Ͽ����ϴ�.\n����ڿ��� ���� �ٶ��ϴ�.",
	ins:"����Ͻðڽ��ϱ�?",
	tail_ins:"����� ����Ͻðڽ��ϱ�?",
	upd:"�����Ͻðڽ��ϱ�?",
	tail_upd:"����� �����Ͻðڽ��ϱ�?",
	del:"������ �����Ͻðڽ��ϱ�?",
	tail_del:"����� ������ �����Ͻðڽ��ϱ�?",
	msg01:"������ ������ ���ε� �Ͻðڽ��ϱ�?",
	msg02:"�ùٸ� ���������� �ƴմϴ�.",
	msg03:"�̹����� ���ε� �� �ּ���.",
	msg04:"�̹����� �������� �����̽��ϴ�. â�� �����ðڽ��ϱ�?",
	msg05:"â�� �����ðڽ��ϱ�?",
	msg06:"Ŭ���Ͻø� �̹����� ������ ���Ե˴ϴ�.",
	msg07:"Ŭ���Ͻø� ������ ������ ���Ե˴ϴ�.",
	msg08:"������ ÷������ �����̽��ϴ�. â�� �����ðڽ��ϱ�?",
	msg09:"������ ���ε� �� �ּ���.",
	msg10:"â�� �����ðڽ��ϱ�?",
	msg11:"�ּҸ� �������� �����̽��ϴ�.�ּҸ� ������ �ּ���.",
	existFile:"���ϸ��� ������ �����մϴ�.\n\n�ٽ� ����� �ֽñ� �ٶ��ϴ�.",
	validFile:"\n\n���ε� ������ ����) ����ȭ�ϰ� �̹������� �� ���������� �����մϴ�."
};

var min = 0;
var max = 0;



var extImgArr = ["jpg","gif","png","bmp","avi","wmv","mov","swf","flv","mpg","mpeg"];
var extFileArr = ["zip","rar","7z","alz","doc","xls" ,"ppt","docx","xlsx","pptx","hwp","txt","pdf","jpg","gif","png","bmp","avi","wmv","mov","swf","flv","mpg","mpeg"];
var han = "����������������������������";
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
 �޼��� ó��
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
 �޷� �� �ʱ�ȭ
 */
function clearCal(obj){
	$("#"+obj).attr("value","");
}

/*
 * �˾� �ڵ� ������¡
 *  - ���� ȯ�濡 ���� ����� �ٸ� �� �ֽ��ϴ�.
 *  - �˾��������� ��ũ��Ʈ ���ϴܿ��� �����Ͻʽÿ�.
 *
 * (ex.) window.onload = function(){popupAutoResize();}
 */
function popupAutoResize() {
	var thisX = parseInt(document.body.offsetWidth);
	var thisY = parseInt(document.body.offsetHeight);
	var maxThisX = screen.width - 50;
	var maxThisY = screen.height - 50;
	var marginY = 0;


	//document.write("�ӽ� ������ Ȯ�� : " + navigator.userAgent);
	// �������� ���� ����. (ǥ�� â �Ͽ��� ������ �ֽʽÿ�.)
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
	//alert("�ӽ� ������ Ȯ�� : " + navigator.userAgent.indexOf("Opera"));
	// �������� ���� ����. (ǥ�� â �Ͽ��� ������ �ֽʽÿ�.)
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
 ���� domain ��������
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
 �̹��� ÷���ϱ�
 */
function attachimage(obj,w){
	var sHTML = "<img src=\""+obj.src+"\" alt=\"÷���̹���\" width=\""+w+"px\" />" ;
	return sHTML;
}
/*
 ���� ÷���ϱ�
 */
function attachfile(obj){
	var home=host();
	var sHTML = "<img src='/images/board_fileicon.gif' alt='attach file' >&nbsp;[<a href=\"javascript:fnDownload('"+obj.options[obj.selectedIndex].text+"','"+obj.options[obj.selectedIndex].value+"');\">"+obj.options[obj.selectedIndex].text+"</a>]&nbsp;" ;

	return sHTML;
}
/*
 ���� �����ϱ�
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
		alert("�����Ͱ� �������� �ʽ��ϴ�.");
		return false;
	}else if (obj.value == "" ){
		alert("�����͸� ������ �ּž� �մϴ�.");
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
		//alert("���� �̸��� ������ �����մϴ�.");
	}
}

/*
 ��밡���� ���� ���
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
 �˾�â Function ��ġ�� �� �߾�
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
 �˾�â Function ��ġ�� �� �߾�
 */
function WindowOpen(URL,title, w, h,sx,sy, scb){
	sub = window.open(URL, title , 'fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,resizable=no,scrollbars='+scb+',width='+w+',height='+h+',top='+sy+',left='+sx);
}


/*
 �޼��� ó��
 */
function Msg(){
	if (arguments[0] != null ) {
		alert(arguments[0]);
	}
}

/*
 �޼��� ó���� ������ �̵�
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
 ���׼��� Submit ó��
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
 ����Ʈ�ڽ��� �ڵ�����
 */
function selectOptions(TmpObj,TmpVal){
	var Obj = document.getElementById(TmpObj);
	if(Obj && TmpVal){
		for(i=0; i<Obj.length; i++) if(Obj.options[i].value==TmpVal) Obj.options[i].selected=true;
	}
}
/*
 ������ư�� �ڵ�����
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
 ������ư�� ��������
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
 üũ�ڽ��� ��������
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
 html tag �� ���� ���ϱ�
 ex) var tagCount = getTagNameSize("img","divNews");
 -> �̹��� �±� �߿��� �̸��� divNews �� ���� ���ϱ�
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
 �±��� display ���θ� ����
 ex) onclick = displayDiv(this,'DivNews2');
 -> ȣ���� �±װ� �����ϴ� �Ǵٸ� �±��� id�� divNews2�� ����  display ��
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

//�ѱ� ó��
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
//���� ó��
//<input type="text" name="id" id="id" onKeyup="onlyDigit(this);">
function onlyDigit(el){
	el.value = el.value.replace(/\D/g,'');
}
//���� ó��
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


//���� ��¥ ���ϱ�
function getDate(){
	time=new Date(); // ����ð� ��������
	year=time.getFullYear(); // �⵵ ��������
	month=time.getMonth()+1; // �� �������� (+1)
	day=time.getDate(); // ��¥ ��������

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
	// ��¥�� �����´�.
	// ���ڸ� ���ؼ� �� ���� ���Ѵ�.
	var tdate = day.getDate() + addend;
	// ��� ��¥�� �����Ѵ�. �� �ѱ��� �ڵ����� ����

	time=new Date(day.getYear(), day.getMonth(), tdate);

	year=time.getFullYear(); // �⵵ ��������

	month=time.getMonth()+1; // �� �������� (+1)
	days=time.getDate(); // ��¥ ��������


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
 * ���� ����
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
			alert('�Է¹����� �ʰ��߽��ϴ�. [' + max + ' Byte]');
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
			alert(msg + '�� �ּ� �Է¹����� �����մϴ�. [' + min + ' ~ ' + max + ' Byte]');
			return false;
		}
		else
		{
			$('#' + id.attr('id') + '_LEN').val(len);
			return true;
		}
	}else{
		alert(msg + '�� �Է¹����� �ʰ��߽��ϴ�. [' + min + ' ~ ' + max + ' Byte]');
		var str = id.val();
		id.val(str.cutByte(max));
		$('#' + id.attr('id') + '_LEN').val(len);
		return false;
	}
}

function limitCharacters(textid, limit, limitid){
	var text = $('#'+textid).val();     // ��� �� ����
	var textlength = text.length;     // �Է°� ���� ����
	if(textlength > limit){
		$('#'+textid).val(text.cutByte(max));         // ���� ���� ���̸�ŭ �� �� ����
		return false;
	}else{
		$('#' + limitid).val(textlength);
		return true;
	}
}

/**
 * �޺��ڽ��� ����
 * obj : �޺��ڽ� obj
 * selVal : ���� �� ��
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
 * �޺��ڽ��� ���� �� ����
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
 * üũ�ڽ��� �� ����
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
 * üũ�ڽ��� �� ����
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

/* ���ϻ����� */
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
 * POST �� �˾� ��ﶧ �����
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
		alert('ó���� ������ �߻��߽��ϴ�.');
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
		alert('ó���� ������ �߻��߽��ϴ�.');
	}
}


/**
 * confirm â
 * width : ����
 * height : ����
 * content : ����
 * btn_y : y��ư��
 * btn_n : n��ư��
 * callback : callback��
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
 * ������� �ݾ��� �������� ��ȯ
 * @param mon
 * @return
 */
function cf_getMoney(mon){
	var result = 0;

	result = Math.round(mon * Math.pow(1000,parseInt(1,10)));

	return result;
}


/* CONTEXT MENU ���� */
document.oncontextmenu = function (){return false;};
/* ���콺 ������ ��ư ���� */
document.onmousedown = function (e){var isNS = (navigator.appName == "Netscape") ? 1 : 0;if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);var myevent = (isNS) ? e : event;var eventbutton = (isNS) ? myevent.which : myevent.button;if((eventbutton==2)||(eventbutton==3)) return false;};
/* ���콺 ������ ��ư ���� */
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


