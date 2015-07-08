<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<head>
<title>아이템 목록</title>
<link rel="stylesheet" type="text/css" href="/js/themes/smoothness/jquery-ui.min.css"/>
<link rel="stylesheet" type="text/css" href="/js/jqgrid/css/ui.jqgrid.css"/>
<script type="text/javascript" src="/js/jquery-ui.min.js" ></script>
<script type="text/javascript" src="/js/jquery.jqGrid.min.js" ></script>
<script type="text/javascript" src="/js/jqgrid/i18n/grid.locale-kr.js"></script>

<script>
$(window).load(function() {
	
	$('#searchList').click(function() 		{	fn_search();	 return false;});
	$('#save').click(function() 		{	fn_save();		 return false;});
	$('#clear').click(function() 		{	fn_clear();		 return false;});
	$('#home').click(function() 		{	fn_home();		 return false;});
	fn_init();
});
function fn_init(){
	 
    $("#jqGridTable").jqGrid({  
        //ajax 호출할 페이지
        url:'/common/popup_jqgrid.json?m=search',
        //로딩중일때 출력시킬 로딩내용
        loadtext : '로딩중..',
        //응답값
        datatype: "json",
        height : 400,
        rowNum: 20,
        gridview:true,
   		rownumbers:false,
   		viewrecords: true,
   	    sortorder: "desc",
   	    loadonce: true,
   		pager: "#jqGridNav",
   		scroll:1,
        colNames:['상품아이디','제품아이디', '가격', '상태','속성'],
        colModel:[
            {name:'itemid',align:"center", width:100},
            {name:'productid',align:"center", width:120},
            {name:'listprice',align:"right", width:120},
            {name:'status',align:"center", width:60},
            {name:'attr1',align:"center", width:180}
        ],
    });
    jQuery("#jqGridTable").jqGrid('navGrid','#jqGridNav',{edit:false,add:false,del:false,search:false,refresh:false});
    
	
}
function fn_home(){
	var _cbfunc = '${param.rtn}';
	eval('jWindowFrame(window.name).'+_cbfunc+'("")' );
	jWindowFrameClose(window.name);	
}
</script>
</head>

<div style="float:right;padding-right:10px">
	<span class="txt-btn blue" id="searchList"><a href="#">조회</a></span>
	&nbsp;&nbsp;
	<span class="txt-btn blue" id="clear"><a href="#">초기화</a></span>
	&nbsp;&nbsp;
	<span class="txt-btn red" id="home"><a href="#" >닫기</a></span>
</div>

<div style="clear:both;padding-top:10px"></div>

<table id="jqGridTable"></table>
<div id="jqGridNav"></div>




<script>
function fn_clear()
{
	$("#jqGridTable").clearGridData();  // 이전 데이터 삭제
}


function fn_search()
{
	$("#jqGridTable").clearGridData();  // 이전 데이터 삭제
	
    var param="";
	$("#jqGridTable").setGridParam({	url:"/common/popup_jqgrid.json?m=search"+param, datatype:"json" }).trigger("reloadGrid");
}


</script>