/*
   파일명 : javascript.js
   설  명 : 공통 JavaScript
   작성자 : shaby
   작성일 : 2009.07.29
   수정일 :
*/

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

   var rcmsJson = {"bind": [
		{cd:"0000",msg:"정상 처리되었습니다"},
		{cd:"0001",msg:"전문 FORMAT ERROR"},
		{cd:"0002",msg:"전문구분 오류"},
		{cd:"0003",msg:"LINE 장애"},
		{cd:"0004",msg:"LINE 장애"},
		{cd:"0005",msg:"LINE 장애"},
		{cd:"0006",msg:"기관코드 오류"},
		{cd:"0007",msg:"은행코드 오류"},
		{cd:"0009",msg:"미처리"},
		{cd:"0010",msg:"필수 입력값 누락"},
		{cd:"0100",msg:"해당전문번호 없음"},
		{cd:"0199",msg:"SYSTEM ERROR"},
		{cd:"0011",msg:"등록되지 않은 협약정보입니다"},
		{cd:"0012",msg:"등록되지 않은 협약기관 정보입니다"},
		{cd:"0013",msg:"이미 해지된 협약정보입니다"},
		{cd:"0014",msg:"이미 해지된 협약기관정보입니다"},
		{cd:"0101",msg:"전문번호 중복"},
		{cd:"0102",msg:"즉시이체업무 개시 전"},
		{cd:"0103",msg:"즉시이체업무 마감 후"},
		{cd:"0104",msg:"입금 계좌점 마감"},
		{cd:"0105",msg:"출금 계좌점 마감"},
		{cd:"0111",msg:"이체일자 오류"},
		{cd:"0112",msg:"이체금액 오류"},
		{cd:"0113",msg:"복기부호 상이"},
		{cd:"0114",msg:"비실명 계좌"},
		{cd:"0115",msg:"CMS계좌"},
		{cd:"0116",msg:"주민/사업자번호 상이"},
		{cd:"0117",msg:"계좌오류 또는 해지계좌임"},
		{cd:"0118",msg:"비밀번호 오류"},
		{cd:"0119",msg:"비밀번호 3회 이상 입력오류"},
		{cd:"0120",msg:"대월한도 초과"},
		{cd:"0121",msg:"입금계좌 미등록"},
		{cd:"0122",msg:"입금계좌 오류"},
		{cd:"0123",msg:"입금계좌 입금한도 초과"},
		{cd:"0124",msg:"입금계좌 거래제한"},
		{cd:"0125",msg:"계좌번호 오류"},
		{cd:"0126",msg:"계좌상태 오류"},
		{cd:"0127",msg:"통장정리후 거래(미기장 포함)"},
		{cd:"0128",msg:"실명 미등록 계좌"},
		{cd:"0131",msg:"출금계좌 미등록"},
		{cd:"0132",msg:"출금계좌 오류"},
		{cd:"0133",msg:"출금계좌 잔액부족"},
		{cd:"0134",msg:"출금계좌 거래제한"},
		{cd:"0135",msg:"출금계좌 비밀번호 상이"},
		{cd:"0136",msg:"인쇄내역(적요) 특수문자"},
		{cd:"0150",msg:"잔액증명 발급계좌"},
		{cd:"0151",msg:"사고신고 계좌"},
		{cd:"0152",msg:"마감 전,후 거래 및 취소 불가"},
		{cd:"0141",msg:"타행환 개시전"},
		{cd:"0142",msg:"타행환 미실시 은행"},
		{cd:"0143",msg:"타행은행코드 오류"},
		{cd:"0144",msg:"타행거래 폭주"},
		{cd:"0145",msg:"상대은행 장애"},
		{cd:"0146",msg:"결제원 장애"},
		{cd:"0147",msg:"타행환 종료"},
		{cd:"0201",msg:"협약한도금액 = 정부출연금액 + 지자체부담현금금액 + 민간부담현금금액이 맞지 않습니다"},
		{cd:"0202",msg:"이미 등록된 협약정보입니다"},
		{cd:"0203",msg:"이미 등록된 협약기관 정보입니다"},
		{cd:"0204",msg:"해당 협약정보의 사업비 계좌정보가 RCMS용 계좌가 아닙니다"},
		{cd:"0205",msg:"해당 협약기관의 연구비 계좌정보가 RCMS용 계좌가 아닙니다"},
		{cd:"0206",msg:"해당 협약기관의 협약한도금액이 초과되었습니다"},
		{cd:"0207",msg:"해당 사업비 계좌거래명세 내역이 없습니다"},
		{cd:"0208",msg:"해당 계좌정보가 RCMS용 계좌가 아닙니다"},
		{cd:"0209",msg:"잘못된 구분 코드입니다"},
		{cd:"0210",msg:"잘못된 금액 입력오류입니다"},
		{cd:"0211",msg:"미래일자 입력오류입니다"},
		{cd:"0212",msg:"변경정보가 기존정보와 동일합니다"},
		{cd:"2044",msg:"해지계좌임"},
		{cd:"2001",msg:"주민번호/사업자 상이."},
		{cd:"2006",msg:"계좌번호 오류"},
		{cd:"3000",msg:"주민/사업자 번호 오류"},
		{cd:"IV01",msg:"전문일련번호 중복입니다"},
		{cd:"IV02",msg:"기관원장에 없거나 해지된 기관입니다"},
		{cd:"IV03",msg:"은행원장에 없거나 장애발생 은행입니다"},
		{cd:"IV04",msg:"등록되지않은 전문입니다"},
		{cd:"IV05",msg:"기타오류"},
		{cd:"IV06",msg:"시스템장애"},
		{cd:"IV07",msg:"카드사등록완료이나 카드정보파일 수신전입니다"},
		{cd:"9979",msg:"내부 서버오류"},
		{cd:"9980",msg:"내부 통신오류"},
		{cd:"9981",msg:"JSONData값이 미입력 되었습니다"},
		{cd:"9985",msg:"SECR_KEY 미입력"},
		{cd:"9986",msg:"REQ_DATA값이 미입력 되었습니다"},
		{cd:"9987",msg:"KEY값이 미입력 되었습니다"},
		{cd:"9988",msg:"KEY값이 올바르지 않습니다"},
		{cd:"9989",msg:"허용된 아이피가 아닙니다"},
		{cd:"9990",msg:"잘못된 제휴기관코드입니다"},
		{cd:"9993",msg:"해당기관은 서비스 되지 않은 기관입니다"},
		{cd:"9994",msg:"조회계좌은행코드 미입력 오류"},
		{cd:"9995",msg:"조회계좌은행코드 길이 오류(3자리)"},
		{cd:"9998",msg:"JSON 파싱오류"},
		{cd:"9999",msg:"내부 통신오류"},
		{cd:"GWS09993",msg:"서비스 설정 값이 잘못되었습니다"}
]};
var rcmsBankJson = {"bind": [
	{cd:"C01006",rcmsBankCd:"001",msg:"한국은행"},
	{cd:"C01035",rcmsBankCd:"002",msg:"산업은행"},
	{cd:"C01004",rcmsBankCd:"003",msg:"기업은행"},
	{cd:"C01001",rcmsBankCd:"004",msg:"국민은행"},
	{cd:"C01007",rcmsBankCd:"005",msg:"외환은행"},
	{cd:"C01024",rcmsBankCd:"007",msg:"수협중앙회"},
	{cd:"C01057",rcmsBankCd:"008",msg:"수출입은행"},
	{cd:"C01011",rcmsBankCd:"011",msg:"농협중앙회"},
	{cd:"C01008",rcmsBankCd:"020",msg:"우리은행"},
	{cd:"C01013",rcmsBankCd:"023",msg:"SC제일은행"},
	{cd:"C01037",rcmsBankCd:"027",msg:"한국씨티은행"},
	{cd:"C01022",rcmsBankCd:"031",msg:"대구은행"},
	{cd:"C01023",rcmsBankCd:"032",msg:"부산은행"},
	{cd:"C01017",rcmsBankCd:"034",msg:"광주은행"},
	{cd:"C01029",rcmsBankCd:"071",msg:"우체국"},
	{cd:"C01010",rcmsBankCd:"035",msg:"제주은행"},
	{cd:"C01034",rcmsBankCd:"037",msg:"전북은행"},
	{cd:"C01021",rcmsBankCd:"039",msg:"경남은행"},
	{cd:"C01006",rcmsBankCd:"048",msg:"신협중앙회"},
	{cd:"C01044",rcmsBankCd:"050",msg:"상호저축은행"},
	{cd:"C01045",rcmsBankCd:"052",msg:"모건스탠리은행"},
	{cd:"C01046",rcmsBankCd:"054",msg:"HSBC은행"},
	{cd:"C01047",rcmsBankCd:"055",msg:"도이치은행"},
	{cd:"C01049",rcmsBankCd:"057",msg:"제이피모간체이스은행"},
	{cd:"C01050",rcmsBankCd:"058",msg:"미즈호코퍼레이트은행"},
	{cd:"C01051",rcmsBankCd:"059",msg:"미쓰비시도쿄UFJ은행"},
	{cd:"C01053",rcmsBankCd:"064",msg:"산림조합중앙회"},
	{cd:"C01054",rcmsBankCd:"076",msg:"신용보증기금"},
	{cd:"C01055",rcmsBankCd:"077",msg:"기술보증기금"},
	{cd:"C01030",rcmsBankCd:"081",msg:"하나은행"},
	{cd:"C01015",rcmsBankCd:"088",msg:"신한은행"},
	{cd:"C01056",rcmsBankCd:"099",msg:"금융결제원"},
]};
   

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


	function mmDisp_div(div_name)
	{
		document.getElementById(div_name).style.display= "inline";
	}

	function mmHide_div(div_name)
	{
		document.getElementById(div_name).style.display= "none";
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
	    document.write(thisX+"_________"+thisY);
	    if (thisX > maxThisX) {
	        window.document.body.scroll = "yes";
	        thisX = maxThisX+20;
	    }
	    /*
	    if (thisY > maxThisY - marginY) {
	        window.document.body.scroll = "yes";
	        thisX += 19;
	        thisY = maxThisY;
	    }
	    */
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
	//var sHTML = "[<a href=\""+home+"/common/download.do?appfile_name="+obj.options[obj.selectedIndex].text+"&amp;virfile_name="+obj.options[obj.selectedIndex].value+"\">"+obj.options[obj.selectedIndex].text+"</a>]&nbsp;" ;
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
function popup_img(){
	URL = '/common/popup_image.do';
	scrollbar = 'no';
	open_win(URL, '460', '160', scrollbar,'이미지첨부하기');
}
function popup_print(){
	URL = '/print.jsp';
	scrollbar = 'auto';
	open_win(URL, '780', '730', scrollbar,'인쇄하기');
}
function popup_excel(){
	URL = '/excel.jsp';
	scrollbar = 'auto';
	open_win(URL, '780', '730', scrollbar,'인쇄하기');
}
function popup_filelist(appfile_no){
	URL = '/common/popup_filelist.do?appfile_no='+appfile_no;
	scrollbar = 'yes';
	open_win(URL, '460', '160', scrollbar,'파일첨부하기');
}
function popup_file(){

	URL = '/common/popup_file.do?appfile_no='+document.getElementById("appfile_no").value;
	scrollbar = 'no';
	open_win(URL, '460', '160', scrollbar,'파일첨부하기');
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
function popup_addr(){
	URL = '/common/popup_address.do';
	scrollbar = 'yes';
	open_win(URL, '360', '360', scrollbar,'우편번호찾기');
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
	mouseOver 때의 Function
 */
function mouseOver(obj){
    obj.style.backgroundColor = "#e7ebf5";
}
/*
	mouseOut 때의 Function
*/
function mouseOut(obj){
    obj.style.backgroundColor = "";
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
	/*
	var Obj = document.getElementsByTagName('input');
	var c = 0;
	for (var i=0;i<Obj.length;i++){
		if(Obj[i].getAttribute("type")=="radio" ){
			if(Obj[i].getAttribute("name") == TmpObj){
				if(Obj[i].value==TmpVal) {
					Obj[i].checked = true;
				}
			}
			c++;
		}
	}
	*/
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

function chgEmailDomain(f){
	if (f.email_domain_list.options[f.email_domain_list.selectedIndex].value == "etc" ) {
		f.email_domain_list.value = "";
		f.email_domain_list.focus();
	}else{
		f.email_domain.value = f.email_domain_list.value;
	}
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


function CallAjax(url, param, callback_function){
	var left = ( $(window).scrollLeft() + ($(window).width() - $('#loading').width()) / 2 );
	var top = ( $(window).scrollTop() + ($(window).height() - $('#loading').height()) / 2 );
	$.ajaxSetup({
		  beforeSend: function() { $('#loading').show(); $('#loading').css('left',left); $('#loading').css('top',top); 		  },
		  complete: function(){ $('#loading').hide(); $('#loading').css('left','-400px'); $('#loading').css('top','-400px');  },
		  success: function() {}
		});
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
	var left = ( $(window).scrollLeft() + ($(window).width() - $('#loading').width()) / 2 );
	var top = ( $(window).scrollTop() + ($(window).height() - $('#loading').height()) / 2 );
	$.ajaxSetup({
		  beforeSend: function() { $('#loading').show(); $('#loading').css('left',left); $('#loading').css('top',top); 		  },
		  complete: function(){ $('#loading').hide(); $('#loading').css('left','-400px'); $('#loading').css('top','-400px');  },
		  success: function() {$('#loading').hide(); $('#loading').css('left','-400px'); $('#loading').css('top','-400px');},
		  error: function() {$('#loading').hide(); $('#loading').css('left','-400px'); $('#loading').css('top','-400px');}
		});
	$.ajax({type:"POST",
		async:true,
		dataType: "json",
		url:url,
		data:param,
		success:function(data){
			$('#loading').hide(); $('#loading').css('left','-400px'); $('#loading').css('top','-400px');
			typeof callback_function == 'string' ? eval(callback_function+"(data)") : callback_function(data);
		},
		error:function(err){ }//alert(err);  }
		});
}

function CrossAjax(url, data, callback_function){
	//jQuery.support.cors = true;
	var left = ( $(window).scrollLeft() + ($(window).width() - $('#loading').width()) / 2 );
	var top = ( $(window).scrollTop() + ($(window).height() - $('#loading').height()) / 2 );
	$.ajaxSetup({
		  beforeSend: function() { $('#loading').show(); $('#loading').css('left',left); $('#loading').css('top',top);  		},
		  complete: function(){ $('#loading').hide(); $('#loading').css('left','-400px'); $('#loading').css('top','-400px'); 	},
		  success: function() {}
		});
	data.result = '10';
	data.output = 'json';
	data.callback  = callback_function;
    $.ajaxPrefilter('json', function(options, orig, jqXHR) { return 'jsonp'; });
	$.ajax({type:"GET",
		crossDomain: true,
		dataType: "jsonp",
		url:url,
		data:data,
		success: function( data, textStatus, jqXHR ) {
			//typeof callback_function == 'string' ? eval(callback_function+"(data)") : callback_function(data);
			alert("sccess : " + data );
	    },
	    error: function( jqXHR, textStatus, errorThrown ) {
	    	alert("err:"+ textStatus + ", " + errorThrown );
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

/* IBTab 에서 타이틀 명으로 IFRAME 객체 리턴한다. */
function fn_GetTab(title)
{
	return $("#Iframe_divIBTabItem_" + myIBTab.FindTabTitle(title))[0].contentWindow;
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
function pdfView(edm_key){
	window.open('', 'EDM_VIEWER', 'width=1000,height=800,status=yes,resizable=yes,scrollbars=yes');

	EdmForm.user_id.value = "admin";
	EdmForm.edm_key.value = edm_key;
	EdmForm.submit();
	//CallAjax("/common/pdfView.action", "edm_key="+edm_key, "fn_pdfView");
}

// PDF 뷰어 팝업
function fn_pdfView(data){
	if(data && data.jsonData && data.jsonData != 'FAIL')
	{
		window.open('', 'EDM_VIEWER', 'width=1000,height=800,status=yes,resizable=yes,scrollbars=yes');

		EdmForm.user_id.value = "admin";
		EdmForm.edm_key.value = data.jsonData['edm_key'];
		EdmForm.submit();
	}
	else
	{
		alert('파일정보를 찾을 수 없습니다.');
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
 * 접수증 출력 시 PDF READER가 없으면 열리는 팝업
 * @param rcptNo
 * @param prgSeq
 * @return
 */
function cf_openPdfReaderDownPop(rcptNo, prgSeq){
	var url = "/pmrc/PMRC002W01PRINTDEL.do";
	url += "?RCPT_NO="+rcptNo;
	url += "&PRG_SEQ="+prgSeq;

	open_win(url, '660', '270', 'yes','PRINT_DEL_WIN');
}

/**
 * 과제 단계/연차정보의 날자 셋팅
 * @param obj
 * @param text
 * @return
 */
function cf_changeDate(obj){
	var val = (obj.value).trim().replaceAll("-", "").replaceAll("/", "");

	if(val == "") return;

	var pt = /^\d{4}\d{2}\d{2}$/;
    if (!pt.test(val)){
    	alert('유효한 형식의 날자가 아닙니다.\nex) 2012-01-01 또는 20120101');
    	obj.value = "";
    	obj.focus();
    	return;
    }

    var y = parseInt(val.substr(0,4), 10);
    var m = parseInt(val.substr(4,2), 10) - 1;
    var d = parseInt(val.substr(6,2), 10);

    var dt = new Date(y, m, d);
    if (dt.getFullYear() == y && dt.getMonth() == m && dt.getDate() == d) {
    	m = m+1;
    	if(m < 10) m = "0"+m;
    	if(d < 10) d = "0"+d;

    	obj.value = y + "-" + m + "-" + d;
    }else{
    	alert('유효한 형식의 날자가 아닙니다.\n날자를 확인 해 주세요.\nex) 2012-01-01 또는 20120101');
    	obj.value = "";
    	obj.focus();

    }
}

/**
 * datepicker keydown 시 datepicker를 hide시킨다.
 * @param obj
 * @return
 */
function cf_closePicker(obj){
	var objId = obj.id;
	if($("#"+objId).attr("disabled") != "disabled"){
		$("#"+objId).datepicker().datepicker("hide");
	}else{
		alert("변경 하실 수 없습니다.");
	}
}

/**
 * datapicker 이미지 팝업
 * @param objId
 * @return
 */
function cf_showPicker(objId){
	if($("#"+objId).attr("disabled") != "disabled"){
		$("#"+objId).datepicker().datepicker("show");
	}else{
		alert("변경 하실 수 없습니다.");
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
	var url = '/common/popup_confirm.do'+rtnCall;

	jWindowPopup(url, width, height, 'yes','CONFIRMWIN');
}

function cf_checkHan(obj){
	var txt = "";
	for(i=0; i<obj.value.length; i++){
		var ch = obj.value.charCodeAt(i);

		if((ch>32&&ch<48)||(ch>57&&ch<127)) {
			obj.value = (obj.value).substring(0, obj.length-1);
			return;
		}
	}
}

/**
 * 목표및내용의 textarea의 높이 수정
 * @param objText
 * @return
 */
function cf_setTextarea(objText){
	var heightArr = [];
	var nameArr = [];
	var statArr = [];

	heightArr["0"] = "200px";
	heightArr["1"] = "70px";

	nameArr["0"] = "축소";
	nameArr["1"] = "확대";

	statArr["0"] = "1";
	statArr["1"] = "0";

	var obj = eval("document.all."+objText);
	var objBtn = eval("document.all."+objText+"_BTN");
	var btnStat = eval("document.all."+objText+"_DATA");
	var stat = (btnStat.innerHTML).trim();

	var btnHTML = "<a href='javascript:cf_setTextarea('LAST_DVLP_GOAL')'>확대</a>";

	obj.style.height = heightArr[stat];
	objBtn.innerHTML = "<a href='javascript:cf_setTextarea(\""+objText+"\")'>"+nameArr[stat]+"</a>";
	btnStat.innerHTML = statArr[stat];

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

/**
 * 도움말 팝업
 * @param lvl1 	: 1lvl id
 * @param lvl2	: 1lvl id
 * @param lvl3  : 3lvl id
 * @return
 */
function cf_openHelp(lvl1, lvl2, lvl3){
	var url = "/menual/menual_frame.jsp";
	url += "?LVL1="+lvl1;
	url += "&LVL2="+lvl2;
	url += "&LVL3="+lvl3;

	open_win(url, '955', '675', 'no', '메뉴얼');
}

/* CONTEXT MENU 방지 */
//document.oncontextmenu = function (){return false;};
/* 마우스 오른쪽 버튼 방지 */
//document.onmousedown = function (e){var isNS = (navigator.appName == "Netscape") ? 1 : 0;if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);var myevent = (isNS) ? e : event;var eventbutton = (isNS) ? myevent.which : myevent.button;if((eventbutton==2)||(eventbutton==3)) return false;};
/* 마우스 오른쪽 버튼 방지 */
//document.onmouseup = function (e){var isNS = (navigator.appName == "Netscape") ? 1 : 0;if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);var myevent = (isNS) ? e : event;var eventbutton = (isNS) ? myevent.which : myevent.button;if((eventbutton==2)||(eventbutton==3)) return false;};

document.onkeydown = function(){
	switch(event.keyCode){
		//case 116: /* F5 방지 */
		//	event.returnValue = false;
		//	event.keyCode = 0;
		//	break;
		case 8: /* 백스페이스 방지 */

			var tg = $(event.srcElement).get(0);
			var name = tg.tagName;
			var type = tg.type;
			var readonly = $(tg).attr("readonly");

			if(!(name == "INPUT" && (type == "text" || type == "password") && readonly != "readonly" || name == "TEXTAREA" && readonly != "readonly"))
			{
				// INPUT(text, password), TEXTAREA 이 수정가능상태 일 때에만 백스페이스 허용
				event.returnValue = false;
				event.keyCode = 0;
			}
			break;
	}
};

/**
 *  엑셀다운로드 - 성과에 사용
 *  작성자 : sh
 *  작성일 : 2012.06.04
 *  param: filname-확장자미포함 파일명, worksheetname-시트이름, shtArr-IBSHEET 배열
 */
function downloadToExcel(filename, worksheetname, shtArr){
	filename += ".xls";
	var merge = 1; // 헤더머지 1=머지, 0=머지안함
	var design = 1; // 디자인적용 1=적용, 0=미적용
	var downCols = ""; // 엑셀에 표시될 컬럼명(SaveName)
	var downCombo = "TEXT"; // 콤보박스값 TEXT=ComboText, CODE=ComboCode

	if(typeof Array.isArray === 'undefined') {
	    Array.isArray = function (arg) {
	        return Object.prototype.toString.call(args) === '[Object Array]';
	    }
	}

	if ( Array.isArray(shtArr) ){
		//alert(shtArr[0].RowCount());
		//shtArr[0].Down2ExcelBuffer(true);
		
		for(var ind=0; ind < shtArr.length; ind++){
			downCols = "";
			// 히든 값으로 처리된 SaveName을 비교해서 히든이 아닌 컬럼들의 정보만 엑셀로 다운받도록 처리
			for(var i=0; i <= shtArr[ind].LastCol(); i++){
				if(shtArr[ind].GetColHidden(i) == 0){
					downCols += shtArr[ind].ColSaveName(i) + "|";
				}
			}
			downCols = downCols.substring(0, downCols.length-1);
			var params = { FileName :filename,  SheetName :worksheetname,Merge:merge,SheetDesign:design,DownCols:downCols, DownCombo:downCombo} ;
			
			shtArr[0].Down2Excel(params);
		}
		//shtArr[shtArr.length-1].Down2ExcelBuffer(false);
	// shtArr이 배열이 아닐경우
	}else{
		for(var i=0; i <= shtArr.LastCol(); i++){
			if(shtArr.GetColHidden(i) == 0){
				downCols += shtArr.ColSaveName(i) + "|";
			}
		}
		var params = { FileName :filename,  SheetName :worksheetname,Merge:merge,SheetDesign:design,DownCols:downCols, DownCombo:downCombo} ;
		shtArr.Down2Excel(params);
	}

}

//window.history.forward();
