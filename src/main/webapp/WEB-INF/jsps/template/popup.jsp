<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%><!DOCTYPE html>
<html lang="ko">
<head>
	<title><sitemesh:write property='title' /></title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
	<meta http-equiv="Cache-Control" content="no-store"/>
	<meta http-equiv="Pragma" content="no-cache"/>
	<meta http-equiv="Expires" content="0"/>
	<meta http-equiv="imagetoolbar" content="no" />
	<meta name="robots" content="noindex,nofollow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="renderer" content="webkit">


	<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/bootstrap/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="/js/jWindow/jquery.windows-engine.css"/>

	<!--[if lt IE 9]>
	<script type="text/javascript" src="/html5css3/html5shiv.min.js"></script>
	<script type="text/javascript" src="/html5css3/respond.min.js"></script>
	<![endif]-->

	<script type="text/javascript" src="/js/jquery-1.11.2.min.js" charset="utf-8"></script>


	<script type="text/javascript" src="/js/jquery.blockUI.js"  charset="utf-8"></script>
	<script type="text/javascript" src="/js/jWindow/jquery.windows-engine.js" charset="utf-8"></script>

	<script type="text/javascript" src="/js/String.js" charset="utf-8"></script>
	<script type="text/javascript" src="/js/jscript.js" charset="utf-8"></script>


	<sitemesh:write property='head'/>
	<script>
	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
	</script>
</head> 
<body>
<div id="debug"></div>

<div id="container" style="padding-left:10px;padding-bottom:10px;padding-top:10px;">
	<sitemesh:write property='body'/>
</div>

<form name="FileDownloadForm" id="FileDownloadForm"  method="post" style="display: none;">
  	<input type="hidden" name="appfile_name" id="appfile_name" value=""/>
  	<input type="hidden" name="virfile_name" id="virfile_name" value=""/>
</form>
<iframe id="ATTACH_FRAME" name="ATTACH_FRAME" style="display: none;"></iframe>
</body>
</html>