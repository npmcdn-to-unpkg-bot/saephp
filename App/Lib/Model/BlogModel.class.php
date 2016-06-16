<?php


class BlogMode extends Model{
	
	 protected $fields = array(
            'blog_id', 'blog_title', 'blog_desc', 'blog_content','blog_create_time',
			'blog_modify_time','user_id',
			'_pk' => 'blog_id', '_autoinc' => true
        );
	
	
}



