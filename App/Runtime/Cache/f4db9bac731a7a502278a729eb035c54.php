<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <title>写blog</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <!-- 引入 Bootstrap -->
    <!-- 新 Bootstrap 核心 CSS 文件 -->
    <link href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">

    <!-- 可选的Bootstrap主题文件（一般不使用） -->
    <script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap-theme.min.css"></script>

    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
    <script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <link href="//cdn.bootcss.com/bootstrap-markdown/2.10.0/css/bootstrap-markdown.min.css" rel="stylesheet">
    <script src="//cdn.bootcss.com/bootstrap-markdown/2.10.0/js/bootstrap-markdown.js"></script>
    <script src="//cdn.bootcss.com/bootstrap-markdown/2.10.0/js/bootstrap-markdown.min.js"></script>
    <script src="__PUBLIC__/js/blog.js"></script>
	<link href="__PUBLIC__/css/blog.css"/>
</head>
<body>
<p class="text-center">
    欢迎使用
</p>


<div>
    <div id="title_div" class="text-center" style="margin-top: 3% ;margin-left: 20%;margin-right: 20%"><input id='title' class="form-control" placeholder='标题'/></div>
    <div  style="margin: 16px"><textarea id='content' class="form-control text-left" rows="15"></textarea></div>
    <div   class="text-center"><input class='btn text-center' id='summit_blog' type='button' value='提    交'  /></div>
</div>

<script type="text/javascript">
    $(function () {
        $("#content").markdown({autofocus:false,savable:false})
         
        rxye.BLOG.initWriter();
        rxye.BLOG.getLocalName();
		
    });
</script>


</body>
</html>