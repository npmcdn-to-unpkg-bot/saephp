<?php

/**
 * 本页仅供测试
 */


import('ORG.Vquery');

class IndexAction extends Action
{

    protected function _initialize()
    {
        $arr = array(
            "url" => 'http://www.baidu.com',
            'method' => 'get' or 'post',
            'data' => array('username' => 'admin', 'password' > 'admin'),);

        // $arr=file_get_contents("http://www.jd.com/allSort.aspx");
        

        header("Content-Type:text/html; charset=utf-8");
    }


    public function index()
    {

        $this->display();
    }
}

?>
