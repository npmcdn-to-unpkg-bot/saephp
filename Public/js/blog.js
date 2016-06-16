/**
 * Created by lishangfan on 2016/6/13.
 */

var isfinish = false;
var rxye = {
    URL: {
        blog: function () {
            return './getBlog';
        },
        writerblog:function () {
            return './insertBlog';
        }

    },


    BLOG: {
        writer: function () {
            var  user_id=rxye.BLOG.getCookie('id');
            var title=document.getElementById('title').value;
            var  content=document.getElementById('content').value;
            var  data={
                'blog_title':title,
                'blog_content':content,
                'user_id':user_id
            };

            rxye.COMM(rxye.URL.writerblog(),data,function result(res) {
                alert('发表成功');
            });
        },

        initWriter: function () {
            document.getElementById('summit_blog').onclick = function () {
                rxye.BLOG.writer();
            }
        },


        getUserBlog: function (page) {
            data = {
                'page': page - 1,
                'count': 10
            }; 
            rxye.COMM(rxye.URL.blog(), data, function blogrsult(result) {
                var table = document.getElementById('blog');
                $('#blog tr').empty();
                if (result.length < 10) {
                    isfinish = true;
                }
                document.getElementById('page').innerHTML = page;

                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = '<div><div class=title>id</div></div>';
                cell2.innerHTML = '<div><div class=title>标题</div></div>';
                cell3.innerHTML = '<div><div class=title>作者</div></div>';
                for (i = 0; i < result.length; i++) {
                    //console.info(result[i]);
                    var row = table.insertRow(i + 1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    cell1.innerHTML = '<div><div class=tablebody>' + result[i].blog_id + '</div></div>';
                    cell2.innerHTML = '<div><div class=tablebody>' + result[i].blog_title + '</div></div>';
                    cell3.innerHTML = '<div><div class=tablebody>' + result[i].name + '</div></div>';
                }
            });
        },

        getLocalName: function () {
            var name = rxye.BLOG.getCookie('name');
            var id = rxye.BLOG.getCookie('id');
            if (name != null) {
                document.getElementById('reg').style.display = 'none';
                document.getElementById('login').style.display = 'none';
                document.getElementById('name').innerHTML = name;
            }

        },

        getCookie: function (name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },


        onevent: function () {
            document.getElementById('next').onclick = function () {
                console.info(document.getElementById('page').innerText);
                if (!isfinish) {
                    rxye.BLOG.getUserBlog(eval(1 + parseInt(document.getElementById('page').innerText)));
                    // document.getElementById('page').innerHTML = (eval(1 + parseInt(document.getElementById('page').innerText)));
                }
            };

            document.getElementById('before').onclick = function () {
                console.info(document.getElementById('page').innerText);

                if (parseInt(document.getElementById('page').innerText) > 1) {
                    isfinish = false;
                    rxye.BLOG.getUserBlog(eval(parseInt(document.getElementById('page').innerText) - 1));
                    //document.getElementById('page').innerHTML = (eval(parseInt(document.getElementById('page').innerText) - 1));
                }
            };

        }


    },


    COMM: function (url, data, usersult) {
        data={'data':data};
        
        $.ajax({
            cache: false,
            type: "post",
            url: url,
            data: data,
            dataType: "jsonp",
            success: function (result) {
                var res = JSON.parse(result);
                if (0 == res.statu) {
                    console.info(res.date);
                    usersult(res.date);
                } else {
                    isfinish = true;
                } 
            },
            error: function (r) {
                alert('faill');
            }
        });
    }


}