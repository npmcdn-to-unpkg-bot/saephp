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

//M()->table("think_select this0")->join('think_student this1 on this0.stu_id=this1.id')
        //->join('think_class this2 on this0.stu_id=this2.id')
        //	->field('this0.id this0_id,this1.id this1_id,this2.id this2_id')

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
