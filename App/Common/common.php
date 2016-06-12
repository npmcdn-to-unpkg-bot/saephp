<?php
function show_db_errorxx(){
	exit('系统访问量大，请稍等添加数据');
}

function success($date){
	return array(
		
		'statu'=>"0",
		'date'=>$date,
		'msg'=>"OK"
		
	);
}

?>