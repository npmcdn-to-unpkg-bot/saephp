<?php

/**
 * 本页仅供测试
 */


import('ORG.Vquery');
import('ORG.UploadFile');

class IndexAction extends Action
{

    protected function _initialize()
    {
        $arr = array(
            "url" => 'http://www.baidu.com',
            'method' => 'get' or 'post',
            'data' => array('username' => 'admin', 'password' > 'admin'),);

        // $arr=file_get_contents("http://www.jd.com/allSort.aspx");
        //http://rxye-public.stor.sinaapp.com/upload/1466143535.jpg


        header("Content-Type:text/html; charset=utf-8");
    }


    public function index()
    {

        $this->display();
    }

    public function upload()
    {
        if (!empty($_FILES)) {
            import("@.ORG.UploadFile");
            $config = array(
                'allowExts' => array('jpg', 'gif', 'png'),
                'savePath' => './Public/upload/',
                'saveRule' => 'time',
            );
            $upload = new UploadFile($config);
            $upload->imageClassPath = "@.ORG.Image";
            $upload->thumb = true;
            $upload->thumbMaxHeight = 100;
            $upload->thumbMaxWidth = 100;

            if (!$upload->upload()) {
                $this->error($upload->getErrorMsg());
            } else {
                $info = $upload->getUploadFileInfo();
                $this->assign('filename', 'http://rxye-public.stor.sinaapp.com/upload/' . $info[0]['savename']);

                $img = M('img');
                $data = array(
                    'img_url' => 'http://rxye-public.stor.sinaapp.com/upload/' . $info[0]['savename']
                );
                $result = $img->add($data);
                $this->ajaxReturn(success($result), 'jsonp');
            }
        }

    }


    //删除图片
    public function unlink()
    {
        sae_unlink('./Public/upload/' . $_GET['filename']);
        sae_unlink('./Public/upload/thumb_' . $_GET['filename']);
        $this->success('删除成功');
    }

}

?>
