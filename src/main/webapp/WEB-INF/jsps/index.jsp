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
.hn {font-family: 'Hanna', sans-serif;}
.nbs {font-family: 'Nanum Brush Script', sans-serif;}
.ng {font-family: 'NanumGothic', sans-serif;}
.ngc {font-family: 'Nanum Gothic Coding', sans-serif;}
.nm {font-family: 'Nanum Myeongjo', sans-serif;}
.nps {font-family: 'Nanum Pen Script', sans-serif;}
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
</head>

<div >
	메뉴 테스트(레이어팝업)
	<br/>
	<button type="button" id="handlebars">Handlebars</button>
	<button type="button" id="jqgrid">jqgrid</button>
	<button type="button" id="popup_member">경로체크</button>
	<button type="button" id="fileupload">파일업로드(드래그앤드롭)</button>
	<button type="button" id="multidownload">파일다운로드(다중파일.zip)</button>
	<button type="button" id="exceldownload">엑셀다운로드</button>
</div>


<label>폰트 사이즈 선택: <select id="sltFontSize">
	<option value="">폰트사이즈 선택해주세요.</option>
	<option value="0.75em">0.75em</option>
	<option value="1em">1em</option>
	<option value="1.05em">1.05em</option>
	<option value="1.1em">1.1em</option>
	<option value="1.15em">1.15em</option>
	<option value="1.2em">1.2em</option>
	<option value="1.25em">1.25em</option>
	<option value="1.3em">1.3em</option>
	<option value="1.35em">1.35em</option>
	<option value="1.4em">1.4em</option>
	<option value="1.45em">1.45em</option>
	<option value="1.5em">1.5em</option>
</select></label>
<div id="divFontSize">

	<div style="font-family:'Gulim';">굴림, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'Dotum';">돋움, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'Malgun Gothic';">맑은고딕, 10liLIoO, 가나다라마바사아자차카타파하</div>

	<div style="font-family:'NotoSansThin';">NotoSansThin, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NotoSansLight';">NotoSansLight, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NotoSansRegular';">NotoSansRegular, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NotoSansDemiLight';">NotoSansDemiLight, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NotoSansMedium';">NotoSansMedium, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NotoSansBold';">NotoSansBold, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NotoSansBlack';">NotoSansBlack, 10liLIoO, 가나다라마바사아자차카타파하</div>

	<div style="font-family:'NotoSans';">Noto Sans10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NanumBarunGothic';">나눔바른고딕, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div style="font-family:'NanumGothic';">나눔고딕 10liLIoO, 가나다라마바사아자차카타파하</div>


	<div class="ng" >Nanum Gothic(나눔고딕) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="nbs" >Nanum Brush(나눔브러쉬) : Script Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="ngc" >Nanum Gothic Coding(나눔고딕코딩) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="nm" >Nanum Myeongjo(나눔명조) : Lorem ipsum dolor sit amet, 10liLIoO, </div>
	<div class="nps" >Nanum Pen Script(나눔펜스크립트) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="hn" >Hanna(하나) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="jg" >Jeju Gothic(제주고딕) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="jh" >Jeju Hallasan(제주한라산) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="jm" >Jeju Myeongjo(제주명조) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
	<div class="kb" >KoPub Batang(코펍바탕) : Lorem ipsum dolor sit amet, 10liLIoO, 가나다라마바사아자차카타파하</div>
</div>
<script type="text/javascript">

	function fn_go(type)
	{
		var _cbfunc="?rtn=_cbGo";
		var url ="";
		if(type == 1){
			url = '/common/handlebars.pms'+_cbfunc;
			jWindowPopup(url, '760', '480', 'yes','handlebars');
		}else if(type == 2){
			url = '/common/popup_jqgrid.pms'+_cbfunc;
			jWindowPopup(url, '630', '550', 'yes','jqgrid');
		}else if(type == 3){
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

	$(window).load(function() {
		$('#handlebars').click(function() 		{	fn_go(1);		 return false;});
		$('#jqgrid').click(function() 		{	fn_go(2);	 return false;});
		$('#popup_member').click(function() 		{	fn_go(3);	 return false;});
		$('#fileupload').click(function() 		{	fn_go(4);	 return false;});
		$('#multidownload').click(function() 		{	fn_go(5);	 return false;});
		$('#exceldownload').click(function() 		{	fn_go(6);	 return false;});
		$('#sltFontSize').change(function() 		{
			if($(this).val() != ""){
				$('#divFontSize').css("font-size",$(this).val());
			}
		});

	});
</script>