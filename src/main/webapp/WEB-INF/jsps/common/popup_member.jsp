<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<head>
<title>아이템 목록</title>
<meta name="decorator" content="popup" />

<link rel="stylesheet" type="text/css" href="/js/themes/redmond/jquery-ui.min.css"/>
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
        url:'/index.pms?m=search',
        //로딩중일때 출력시킬 로딩내용
        loadtext : '로딩중..',
        //응답값
        datatype: "json",
        height : 400,
        rowNum: 20,
        gridview:true,
   		rownumbers:true,
   		rowList:[20,50,100],
   		viewrecords: true,
   	    sortorder: "desc",
   	    loadonce: true,
   		pager: "#jqGridPage",
   		scroll:1,
        colNames:['상품아이디','제품아이디', '가격', '상태','속성'],
        colModel:[
            {name:'ITEMID',align:"center", width:100},
            {name:'PRODUCTID',align:"center", width:120},
            {name:'LISTPRICE',align:"right", width:120},
            {name:'STATUS',align:"center", width:60},
            {name:'ATTR1',align:"center", width:150}     
        ],
        caption:"상품목록"
    });
    jQuery("#jqGridTable").jqGrid('navGrid','#jqGridPage',{edit:false,add:false,del:false,search:false,refresh:false});
    
	
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
<div id="jqGridPage"></div>




<script>
function fn_clear()
{
	$("#jqGridTable").clearGridData();  // 이전 데이터 삭제
}


function fn_search()
{
	$("#jqGridTable").clearGridData();  // 이전 데이터 삭제
	
    var param="";
	$("#jqGridTable").setGridParam({	url:"/index.pms?m=search"+param, datatype:"json" }).trigger("reloadGrid");
}


</script>