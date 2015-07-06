<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<head>
<title>아이템 목록</title>
<meta name="decorator" content="popup" />
<style>
li {padding-bottom:10px}
</style>
<script>
$(window).load(function() {
	$('#handlebars').click(function() 		{	fn_go(1);		 return false;});
	$('#jqgrid').click(function() 		{	fn_go(2);	 return false;});
	$('#popup_member').click(function() 		{	fn_go(3);	 return false;});
	
});
function fn_go(type)
{
	if(type == 1){
		var _cbfunc= "?rtn=_cbGo";
		url = '/common/handlebars.pms'+_cbfunc;
		jWindowPopup(url, '760', '480', 'yes','handlebars');
			
	}else if(type == 2){
		var _cbfunc= "?rtn=_cbGo";
		url = '/common/jqgrid.pms'+_cbfunc;
		jWindowPopup(url, '630', '550', 'yes','jqgrid');
	}else if(type == 3){
		var _cbfunc= "?rtn=_cbGo";
		url = '/common/popup_member.pms'+_cbfunc;
		jWindowPopup(url, '630', '550', 'yes','jqgrid');
		
	}
	
}
 
function _cbGo(data)
{// 레이어 팝업 콜백 함수
	//리터값이 json 일때. 적당히 가공하여 파싱
	
}
</script>
</head>

<div class="markdown-body">
	메뉴 테스트(레이어팝업)
	<ul>
		<li>
			<span class="txt-btn blue" id="handlebars"><a href="#" >handlebars</a></span>
		</li>
		<li>
			<span class="txt-btn blue" id="jqgrid"><a href="#">jqgrid</a></span>
		</li>
		<li>
			<span class="txt-btn blue" id="popup_member"><a href="#">경로체크</a></span>
		</li>
	</ul>
</div>

