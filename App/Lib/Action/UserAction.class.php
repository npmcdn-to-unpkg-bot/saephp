<?php

/**
 * 本页仅供测试
 */


class UserAction extends Action {

    protected function _initialize() {
        header("Content-Type:text/html; charset=utf-8");
    }
   
	 public function  getUser(){ 
		 
		 $data=M('user'); 
		 $page=$_POST['page'];		 
		 
		 $pageCount=$_POST['count'];
		 if($pageCount==null||0==$pageCount){
			$pageCount=10;
		 }
		  $page=$page*$pageCount;
		 
		 $result=$data->order('id desc')->limit($page.','.$pageCount)->select();
		 
		$this->ajaxReturn($result ,'jsonp');
		 
	} 
	
	public function  regedit(){
		
		$user=M('user'); 
		//echo  base64_decode(); 
		 $data=($_POST['data']); 
		 
		 
		$user->where('name=%s',$data['name']);
		
		if($user==null){
		 $result=$user->add($data);  		
		
		 $this->ajaxReturn( $result,'jsonp');
			
		}else{
			 $this->ajaxReturn( $result,'jsonp');
			
		}
		 
			
		 
		 
	 	
		//$this->display('test');
	}
	
	
	
	public function  regeditH(){
		$this->display();
	}
	
	

	
	
	
	

}



?>