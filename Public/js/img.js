var isfinish = false;
var rxye = {
    URL: {
        regedit: function () {
            return './regedit';
        },
        regeditH: function () {
            return './User/regeditH';
        },
        getImgUrl: function () {
            return './getImg'
        }

    },
    IMG: {
        login: function () {
            var name = document.getElementById('login_name').value;
            var pwd = document.getElementById('login_pwd').value;
            var data = {
                'name': name,
                'pwd': $.md5(pwd)
            };

            rxye.COMM(rxye.URL.login(), data, function usersult(result) {
                rxye.USER.saveCookie(name, result);
                history.go(-1);
            });


        },
        logininit: function () {
            document.getElementById('login').onclick = function () {
                rxye.USER.login();
            };
        },

        init: function () {
            // document.getElementById("summit").onclick = function () {
            //     rxye.USER.regedit();
            // };


        },

        regedit: function () {
            var name = document.getElementById('name').value;
            var pwd = document.getElementById('pwd').value;

            data = {
                'name': name,
                'pwd': $.md5(pwd)
            };

            console.info(data);

            rxye.COMM(rxye.URL.regedit(), data, function usersult(result) {
                rxye.USER.saveCookie(name, result);
                history.go(-1);

            });
        },


        saveCookie: function (name, id) {
            var cookie_name = "name=" + escape(name) + ";";                                                               //编写cookie的键与值
            var cookie_name = cookie_name + "path=/;";       //设置cookie的路径
            //设置cookie的域
            document.cookie = cookie_name;               //将这些信息写入cookie变量中去


            var cookie_id = "id=" + escape(id) + ";";                                                               //编写cookie的键与值
            var cookie_id = cookie_id + "path=/;";       //设置cookie的路径

            document.cookie = cookie_id;

            document.cookie = name;
        },
        getImg: function (page) {
            data = {
                'page': page - 1,
                'count': 10
            };

            rxye.COMM(rxye.URL.getImgUrl(), data, function result(result) {

                var imgUl = document.getElementById('img');
                console.info(result[0].img_url);
                if (result.length < 10) {
                    isfinish = true;
                }
                for (var i = 0; i < result.length; i++) {
                    var nDiv = document.createElement('div');
                    nDiv.className = 'img-div container';
                    imgUl.appendChild(nDiv);
                    var nImg = document.createElement('img');
                    nImg.src = result[i].img_url;
                    nDiv.appendChild(nImg);

                }
            });
        },

        onevent: function () {
            document.getElementById('next').onclick = function () {
                console.info(document.getElementById('page').innerText);
                if (!isfinish) {
                    rxye.IMG.getImg(eval(1 + parseInt(document.getElementById('page').innerText)));
                    // document.getElementById('page').innerHTML = (eval(1 + parseInt(document.getElementById('page').innerText)));
                }
            };

            document.getElementById('before').onclick = function () {
                console.info(document.getElementById('page').innerText);

                if (parseInt(document.getElementById('page').innerText) > 1) {
                    isfinish = false;
                    rxye.IMG.getImg(eval(parseInt(document.getElementById('page').innerText) - 1));
                    //document.getElementById('page').innerHTML = (eval(parseInt(document.getElementById('page').innerText) - 1));
                }
            };

        },
        

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
                    usersult(res.date);
                } else {
                    alert(res.msg);
                }
                console.info(result);
            },
            error: function (r) {
                console.info(r.responseText);
                alert(r.responseText.msg);
            }
        });
    }


}