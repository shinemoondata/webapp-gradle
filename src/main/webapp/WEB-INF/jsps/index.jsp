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


.hn {font-family: 'Hanna';}
.nbs {font-family: 'Nanum Brush Script';}
.ng {font-family: 'NanumGothic';}
.ngc {font-family: 'Nanum Gothic Coding';}
.nm {font-family: 'Nanum Myeongjo';}
.nps {font-family: 'Nanum Pen Script';}
.jg {font-family: 'Jeju Gothic', sans-serif;}
.jh {font-family: 'Jeju Hallasan', cursive;}
.jm {font-family: 'Jeju Myeongjo', serif;}
.kb {font-family: 'KoPub Batang', serif;}
</style>
<script type="text/javascript">
	WebFontConfig = {
		custom: {
			families: ['Hanna','Nanum Brush Script','Nanum Gothic Coding','Nanum Myeongjo','Nanum Pen Script','Jeju Gothic','Jeju Hallasan','Jeju Myeongjo','KoPub Batang'],
			urls: ['http://fonts.googleapis.com/earlyaccess/hanna.css',	'http://fonts.googleapis.com/earlyaccess/nanumbrushscript.css',
					'http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css','http://fonts.googleapis.com/earlyaccess/nanummyeongjo.css',
					'http://fonts.googleapis.com/earlyaccess/nanumpenscript.css', 'http://fonts.googleapis.com/earlyaccess/jejugothic.css',
					'http://fonts.googleapis.com/earlyaccess/jejuhallasan.css', 'http://fonts.googleapis.com/earlyaccess/jejumyeongjo.css',
					'http://fonts.googleapis.com/earlyaccess/kopubbatang.css'
			]
		}
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
</script>

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
		var param ="HeaderColumns=아이템아이디`제품아이디`가격`단위`제고`상태`속성";
			param += "&Properties=itemid`productid`listprice`unitcost`supplier`status`attr1";
		url = 'excelDownload.pms?'+param;
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

<div style="font-family:'Gulim';">굴림 웹폰트 테스트10liLIoO</div>
<div style="font-family:'Dotum';">돋움 웹폰트 테스트10liLIoO</div>
<div style="font-family:'Malgun Gothic';">맑은고딕 웹폰트 테스트10liLIoO</div>

<div style="font-family:'NotoSansThin';">NotoSansThin 웹폰트 테스트10liLIoO</div>
<div style="font-family:'NotoSansLight';">NotoSansLight 웹폰트 테스트10liLIoO</div>
<div style="font-family:'NotoSansRegular';">NotoSansRegular 웹폰트 테스트10liLIoO</div>
<div style="font-family:'NotoSansDemiLight';">NotoSansDemiLight 웹폰트 테스트10liLIoO</div>
<div style="font-family:'NotoSansMedium';">NotoSansMedium 웹폰트 테스트10liLIoO</div>
<div style="font-family:'NotoSansBold';">NotoSansBold 웹폰트 테스트10liLIoO</div>
<div style="font-family:'NotoSansBlack';">NotoSansBlack 웹폰트 테스트10liLIoO</div>

<div style="font-family:'NotoSans';">Noto Sans웹폰트 테스트10liLIoO</div>
<div style="font-family:'NanumBarunGothic'";>나눔바른고딕 웹폰트 테스트10liLIoO</div>
<div style="font-family:'NanumGothic'";>나눔고딕 웹폰트 테스트10liLIoO</div>

<div class="ng">Nanum Gothic Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>

<div class="nbs">Nanum Brush Script Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="ngc">Nanum Gothic Coding Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="nm">Nanum Myeongjo Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="nps">Nanum Pen Script Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="hn">Hanna Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="jg">Jeju Gothic Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="jh">Jeju Hallasan Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="jm">Jeju Myeongjo Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>
<div class="kb">KoPub Batang Lorem ipsum dolor sit amet, 웹폰트 테스트10liLIoO</div>