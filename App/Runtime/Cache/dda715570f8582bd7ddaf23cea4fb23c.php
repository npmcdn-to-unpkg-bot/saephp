<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
   <head>
      <title>首页</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta http-equiv="content-type" content="text/html;charset=utf-8">
      <!-- 引入 Bootstrap -->
   <!-- 新 Bootstrap 核心 CSS 文件 -->
<link href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">

<!-- 可选的Bootstrap主题文件（一般不使用） -->
<script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap-theme.min.css"></script>

<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/js/bootstrap.min.js"></script>
   </head>
   <body>
      <script type="text/javascript"> 

$(document).ready(function(){  
 $.ajax( {  
       url:'http://192.168.56.1/rxye/1/Index/test.html',// 跳转到 action  
 
     type:'post',  
     cache:false,  
     dataType:'jsonp',  
     success:function(data) {  
            alert(data+'---------------------');  
      },  
      error : function() {  
           
           alert("异常！");  
      }  
 });
 
}); 

</script> 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
<?php echo ($name); ?>
  
     
 
	     
	  
   </body>
</html>