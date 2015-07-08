<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%><!DOCTYPE html><html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="robots" content="noindex,nofollow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
<title><sitemesh:write property='title' /></title>

<link rel="stylesheet" type="text/css" href="/css/basic.css"/>
<link rel="stylesheet" type="text/css" href="/js/jWindow/jquery.windows-engine.css"/>

<script type="text/javascript" src="/js/jquery-2.1.3.min.js" charset="utf-8"></script>
<script type="text/javascript" src="/js/jquery-migrate-1.2.1.min.js" charset="utf-8"></script>
<script type="text/javascript" src="/js/handlebars-v3.0.0.js" ></script>
<script type="text/javascript" src="/js/jquery.blockUI.js"  charset="utf-8"></script>
<script type="text/javascript" src="/js/jWindow/jquery.windows-engine.js" charset="utf-8"></script>

<script type="text/javascript" src="/js/String.js" charset="utf-8"></script>
<script type="text/javascript" src="/js/javascript.js" charset="utf-8"></script>
<sitemesh:write property='head'/>
<script>
$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
</script>
</head>
<body>
<div >
<sitemesh:write property='body'/>
</div>

<form name="FileDownloadForm" id="FileDownloadForm" method="post" style="display: none;">
  	<input type="hidden" name="appfile_name" id="appfile_name" value=""/>
  	<input type="hidden" name="virfile_name" id="virfile_name" value=""/>
</form>
<iframe id="ATTACH_FRAME" name="ATTACH_FRAME" style="display: none;"></iframe>
</body>
</html>

