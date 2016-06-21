<?php

class  ImgAction extends Action
{

public function getImgH()
    {
		$this->display('getImg');
	}


    public function getImg()
    {
        $page = $_POST['data']['page'];
        $pageCount = $_POST['data']['count'];
        if ($pageCount == null || 0 == $pageCount) {
            $pageCount = 10;
        }
        $page = $page * $pageCount;       
        
		$img=M('img');		
		$result=$img->limit($page . ',' . $pageCount)->select(); 
        $this->ajaxReturn(success($result), 'jsonp'); 
    } 
}
