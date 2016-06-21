<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <title>首页</title>
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

    <script src="__PUBLIC__/js/comm.js"></script>
    <script src="__PUBLIC__/js/index.js"></script>

    <link href="__PUBLIC__/css/index.css" rel="stylesheet" type="text/css"/>

</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class='container pull-right' style='height:50px;line-height:50px'>
        <span id='name'></span>
        <a id='login' class='btn btn-primary pull-right' href='./User/loginH'>登录</a>

        <a id='blog' class='btn btn-primary pull-right' href='./Blog/blog'>blog</a>

        <a id='reg' class='btn btn-primary pull-right' href='./User/regeditH'>注册</a>
        <a id='writerblog' class='btn btn-primary pull-right' href='./Blog/blogH'>写blog</a>
        <a id='imgs' class='btn btn-primary pull-right' href='./Img/getImgH'>图片</a>

    </div>
</nav>

<!--轮播-->
<div>
    <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
            <div class="item active">
                <img src="__PUBLIC__/img/1.jpg" alt="First slide" style="width: 100% ;height: 200px">
            </div>
            <div class="item">
                <img src="__PUBLIC__/img/2.jpg" alt="Second slide" style="width: 100% ;height: 200px">
            </div>
            <div class="item">
                <img src="__PUBLIC__/img/3.jpg" alt="Third slide" style="width: 100% ;height: 200px">
            </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="carousel-control left" href="#myCarousel"
           data-slide="prev">&lsaquo;</a>
        <a class="carousel-control right" href="#myCarousel"
           data-slide="next">&rsaquo;</a>
    </div>
</div>

<div>
    <input type="file" name="savename" id='img'/>
    <input class="btn btn-primary" id='imgupload' value="上传" type="submit"/>
</div>


<script type="text/javascript">
    $(function () {
          rxye.INDEX.getLocalName();
        rxye.INDEX.onevent();

    });
</script>
</body>


</body>
</html>