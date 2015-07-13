<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<head>
<title>아이템 목록</title>
<style>
li {padding-bottom:10px}
</style>
<script>
$(window).load(function() {
	$('#handlebars').click(function() 		{	fn_go(1);		 return false;});
	$('#jqgrid').click(function() 		{	fn_go(2);	 return false;});
	$('#popup_member').click(function() 		{	fn_go(3);	 return false;});
	$('#fileupload').click(function() 		{	fn_go(4);	 return false;});
	$('#multidownload').click(function() 		{	fn_go(5);	 return false;});
	$('#exceldownload').click(function() 		{	fn_go(6);	 return false;});

});
function fn_go(type)
{
	if(type == 1){
		var _cbfunc= "?rtn=_cbGo";
		url = '/common/handlebars.pms'+_cbfunc;
		jWindowPopup(url, '760', '480', 'yes','handlebars');
			
	}else if(type == 2){
		var _cbfunc= "?rtn=_cbGo";
		url = '/common/popup_jqgrid.pms'+_cbfunc;
		jWindowPopup(url, '630', '550', 'yes','jqgrid');
	}else if(type == 3){
		var _cbfunc= "?rtn=_cbGo";
		url = '/common/popup_member.pms'+_cbfunc;
		jWindowPopup(url, '630', '550', 'yes','jqgrid');
	}else if(type == 4){
		url = 'fileUpload.pms';
		location.href = url;
	}else if(type == 5){
		url = 'fileDownload.pms';
		window.open(url);
	}else if(type == 6){
		url = 'excelDownload.pms';
		window.open(url);
	}
}
 
function _cbGo(data)
{// 레이어 팝업 콜백 함수
	//리터값이 json 일때. 적당히 가공하여 파싱
	
}
</script>
</head>

<div >
	메뉴 테스트(레이어팝업)
	<br/>
	<button type="button" class="btn btn-primary btn-xs" id="handlebars">Handlebars</button>
	<button type="button" class="btn btn-info btn-xs" id="jqgrid">jqgrid</button>
	<button type="button" class="btn btn-default btn-xs" id="popup_member">경로체크</button>
	<button type="button" class="btn btn-default btn-xs" id="fileupload">파일업로드(드래그앤드롭)</button>
	<button type="button" class="btn btn-default btn-xs" id="multidownload">파일다운로드(다중파일.zip)</button>
	<button type="button" class="btn btn-default btn-xs" id="exceldownload">엑셀다운로드</button>
</div>

