<?php
function show_db_errorxx(){
	exit('系统访问量大，请稍等添加数据');
}

function success($date){	
	if($date==null||$date==''){		
		return 		 	
		json_encode(array(
		'statu'=>"1",
		'date'=>"",
		'msg'=>"数据null" 
	));
	}else{
		return json_encode(array(
		'statu'=>"0",
		'date'=>$date,
		'msg'=>"OK" 
	));
	}  
} 

function fail($date,$msg){	
	if($date==null||$date==''){		
		return 
		json_encode(
		array(		
		'statu'=>"1",
		'date'=>"",
		'msg'=>$msg 
	));
	}else{
			json_encode		(
			array(		
		'statu'=>"0",
		'date'=>$date,
		'msg'=>$msg
	));
	} 
	 
}








?>