/**
 * Created by lishangfan on 2016/6/13.
 */

var isfinish = false;
var rxye = {
    URL: {
        blog: function () {
            return './getBlog';
        },
        writerblog: function () {
            return './insertBlog';
        },
        login: function () {
            return './User/loginH';
        }

    },


    BLOG: {
        writer: function () {
            var user_id = rxye.BLOG.getCookie('id');
            var title = document.getElementById('title').value;
            var content = document.getElementById('content').value;


            if (title && title == null) {
                return;
            }

            if (content && content == null) {
                return;
            }

            if (user_id && user_id == null) {

                location.href = login();
                return;
            }


            var data = {
                'blog_title': title,
                'blog_content': content,
                'user_id': user_id
            };

            rxye.COMM(rxye.URL.writerblog(), data, function result(res) {
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
                var oBlog = document.getElementById('blog');
                oBlog.innerHTML = "";
                if (result.length < 10) {
                    isfinish = true;
                }
                document.getElementById('page').innerHTML = page;


                for (var i = 0; i < result.length; i++) { 
                    var cellDiv = document.createElement('div');
                    cellDiv.className = 'col-xs-4 panel panel-default';
                    oBlog.appendChild(cellDiv);
                    /**
                     * 1
                     * @type {Element}
                     */
                    var cellDivId = document.createElement("div");
                    cellDivId.className = 'col-xs-4 panel panel-default';
                    cellDivId.innerHTML = result[i].blog_id;

                    cellDiv.appendChild(cellDivId);

                    /**
                     * 2
                     * @type {Element}
                     */
                    var cellDivTitle = document.createElement("div");
                    cellDivTitle.className = 'col-xs-4 panel panel-default';
                    cellDivTitle.innerHTML = result[i].blog_title;

                    cellDiv.appendChild(cellDivTitle);


                    var cellDivContent = document.createElement("div");
                    cellDivContent.className = 'col-xs-4 panel panel-default';
                    cellDivContent.innerHTML = result[i].blog_content;
                    var cellArticle = document.createElement('article');

                    cellArticle.className = 'container';
                    cellArticle.innerText = result[i].blog_content;
                    cellDivContent.appendChild(cellArticle); 
                    cellDiv.appendChild(cellDivContent);


                    var cellDivUser = document.createElement("div");
                    cellDivUser.className = 'col-xs-4 panel panel-default';
                    cellDivUser.innerHTML = result[i].name;

                    cellDiv.appendChild(cellDivUser);


                    oBlog.appendChild(cellDiv);


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
        /**
         * 取session
         * @param name
         * @returns {null}
         */
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
        data = {'data': data};

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