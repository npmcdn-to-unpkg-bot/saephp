<?php

class  BlogAction extends Action
{

    public function getBlog()
    {
        $BlogMode = M('table');
        $page = $_POST['data']['page'];
        $pageCount = $_POST['data']['count'];
        if ($pageCount == null || 0 == $pageCount) {
            $pageCount = 10;
        }
        $page = $page * $pageCount;


        $result = M()->table('think_blog  blog')->join('think_user user on user.id=blog.user_id')->order('blog.blog_id desc')->limit($page . ',' . $pageCount)->select();


        $this->ajaxReturn(success($result), 'jsonp');


    }

    function insertBlog()
    {
        $blog = M('blog');
        $date = $_POST['data'];
        $date['blog_desc'] = $date['title'];
        $date['blog_create_time'] = time();
        $date['blog_modify_time'] = time();
    //    exit(var_dump($date));
        $result = $blog->add($date);
        $this->ajaxReturn(success($result), 'jsonp');

    }

    function blog()
    {
        $this->display();
    }

    function blogH()
    {
        $this->display();
    }


}
