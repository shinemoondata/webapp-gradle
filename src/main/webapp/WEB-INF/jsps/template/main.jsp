<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%><!DOCTYPE html>
<html class="no-js" lang="ko">
<head>
	<title><sitemesh:write property='title' /></title>
	<meta charset="utf-8"/>
	<meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1"/>
	<meta http-equiv="Cache-Control" content="no-store"/>
	<meta http-equiv="Pragma" content="no-cache"/>
	<meta http-equiv="Expires" content="0"/>
	<meta http-equiv="imagetoolbar" content="no" />
	<meta name="robots" content="noindex,nofollow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
	<meta name="renderer" content="webkit"/>

	<link rel="stylesheet" type="text/css" href="/css/normalize.css"/>
	<link rel="stylesheet" type="text/css" href="/css/main.css"/>
	<link rel="stylesheet" type="text/css" href="/css/basic.css"/>
	<link rel="stylesheet" type="text/css" href="/css/jquery.Placeholders.monkey.patch.min.css"/>
	<link rel="stylesheet" type="text/css" href="/js/jWindow/jquery.windows-engine.css"/>
	<script type="text/javascript" src="/js/vendor/modernizr-2.8.3.min.js"></script>
	<script type="text/javascript" src="/js/vendor/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="/js/jquery-migrate-1.2.1.min.js" charset="utf-8"></script>
	<script type="text/javascript" src="/js/plugins.js"></script>
	<script type="text/javascript" src="/js/main.js"></script>
	<script type="text/javascript" src="/js/jWindow/jquery.windows-engine.js" charset="utf-8"></script>
	<script type="text/javascript" src="/js/placeholders.min.js" charset="utf-8"></script>
	<script type="text/javascript" src="/js/jquery.Placeholders.monkey.patch.min.js" charset="utf-8"></script>
	<!--[if lte IE 8]>
	<script type="text/javascript" src="/js/es5-shim.min.js"></script>
	<![endif]-->

	<script type="text/javascript" src="/js/String.js" charset="utf-8"></script>
	<script type="text/javascript" src="/js/jscript.js" charset="utf-8"></script>


	<sitemesh:write property='head'/>

</head>
<body>
<div class="container">

<sitemesh:write property='body'/>
</div>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
	(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
		e=o.createElement(i);r=o.getElementsByTagName(i)[0];
		e.src='https://www.google-analytics.com/analytics.js';
		r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	ga('create','UA-XXXXX-X','auto');ga('send','pageview');
</script>
</body>
</html>

