<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<head>
<title>아이템 목록</title>

<style>
#tableHeadView th{ background-color:#efefef;}
</style>

<script type="text/javascript" src="/js/handlebars-v3.0.0.js" ></script>

<script>
$(window).load(function() {
	
	$('#searchList').click(function() 		{	fn_search();	 return false;});
	$('#save').click(function() 		{	fn_save();		 return false;});
	$('#clear').click(function() 		{	fn_clear();		 return false;});
	$('#home').click(function() 		{	fn_home();		 return false;});
	fn_search();
});
function fn_home(){
	var _cbfunc = '${param.rtn}';
	eval('jWindowFrame(window.name).'+_cbfunc+'("")' );
	jWindowFrameClose(window.name);	

}
</script>
</head>


<div style="float:right;padding-right:10px">
	<button type="button" id="save">저장</button>
	<button type="button" id="searchList">조회</button>
	<button type="button" id="clear">초기화</button>
	<button type="button" id="home">닫기</button>


</div>

<div style="clear:both;padding-top:10px"></div>

<div id="tableView" style="">
	<table border="1" >
	<colgroup>
		<col width="100px" /><col width="100px" /><col width="100px" /><col width="100px" />
		<col width="60px" /><col width="60px" /><col width="200px" />
	</colgroup>
	<thead id="tableHeadView">
	<tr> 
		<th align="center">ITEMID</th>
		<th align="center">PRODUCTID</th>
		<th align="center">LISTPRICE</th>
		<th align="center">UNITCOST</th>
		<th align="center">SUPPLIER</th>
		<th align="center">STATUS</th>
		<th align="center">ATTR</th>
	</tr>
	</thead>
	<tbody id="tableBodyView"></tbody>
	<tfoot id="tableFootView"></tfoot>
	</table>
</div>

<script id="item-template" type="text/x-handlebars-template">
{{#each rows}}
<tr> 
<td align="left" style="padding-left:3px"  >{{itemid}}</td>
<td align="left" style="padding-left:3px"  >{{productid}}</td>
<td align="right" style="padding-right:3px" >{{listprice}}</td>
<td align="right" style="padding-right:3px" >{{unitcost}}</td>
<td align="center"  >{{supplier}}</td>
<td align="center"  >{{status}}</td>
<td align="left" style="padding-left:3px" >{{attr1}}</td>
</tr>
{{/each}} 
</script>





<script>

function fn_clear()
{
	$('#tableBodyView').html("");
}

function fn_search(data)
{
    
	if(data == undefined){
		
		var param = "m=search";
		var url = "/common/handlebars.json";
		CallAjax(url, param, fn_search);	
	}else{
		
		var source = $("#item-template").html();
		var template = Handlebars.compile(source);
		
		$('#tableBodyView').html(template(data));
		
		$('tbody td').css({"cursor":"pointer"});
		$('tbody td').hover(function() {
	        	$(this).css('background-color', '#ff0')
	    	}, function() {
	        	$(this).css('background-color', '')
	    });
		
		$('tbody td').click(function() {
		    var $tr = $(this).closest('tr');
		    var rowIndex = $tr.index();
		    var colIndex = $(this).index();
		    
		    _click(rowIndex, colIndex);
		});
		
	} 
}

function _click(nRow, nCol){
	alert(_getValue("#tableBodyView", nRow,nCol));
}

function _getValue(obj, nRow, nCol){
	return $(obj+' tr:eq(' + nRow +  ') td:eq(' + nCol + ')' ).html(); 
}

function fn_save()
{ 
	var param = "m=insert&itemid=EST-6000";
	var url = "/common/insertJson.json";
	CallAjax(url, param, _save);
}
function _save(data){

	if(data.result == "1"){
		alert(errMsg(data.result));
		fn_search();
	}else{
		alert(errMsg(data.result));
	}

	
}


</script>