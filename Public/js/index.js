var isfinish = false;
var rxye = {
    URL: {
        user: function () {
            return '.././User/getUser';
        },
        UPLOAD: function () {

           // console.info(rxye.URL.getRootPath());
            return  './Index/upload';
        },

        getRootPath: function () {
            var curWwwPath = window.document.location.href;
            var pathName = window.document.location.pathname;
            var pos = curWwwPath.indexOf(pathName);
            var localhostPaht = curWwwPath.substring(0, pos);
            var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
            return (localhostPaht + projectName);
        }
    },
    /**

     <tr>
     <th>名称</th>
     <th>城市</th>
     <th>密码</th>
     </tr>
     */
    INDEX: {


        getLocalName: function () {
            var name = rxye.INDEX.getCookie('name');
            var id = rxye.INDEX.getCookie('id');
            if (name != null) {
                document.getElementById('reg').style.display = 'none';
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
			
			 document.getElementById('imgupload').onclick = function () {

                rxye.COMM.upload();
            };
			$('.carousel').carousel();
        }


    },

    COMM: {
        upload: function () {
            var xhr;
            if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            else if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            }
            var fileObj = document.getElementById("img").files[0];
            var FileController = rxye.URL.UPLOAD();
            var form = new FormData();
            form.append("file", fileObj);
            xhr.onreadystatechange =handleStateChange(xhr);
            xhr.open("post", FileController, true);
            xhr.send(form);
        },


    },

    // COMM: function (url, data, usersult) {
    //     $.ajax({
    //         cache: false,
    //         type: "post",
    //         url: url,
    //         data: data,
    //         dataType: "jsonp",
    //         success: function (result) {
    //             var res = JSON.parse(result);
    //             if (0 == res.statu) {
    //                 console.info(res.date);
    //                 usersult(res.date);
    //             } else {
    //                 isfinish = true;
    //             }
    //
    //
    //         },
    //         error: function (r) {
    //             alert('faill');
    //         }
    //     });
    // }


}

function handleStateChange (xhr) {
    alert('OK');
    console.info(xhr.response);
    if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status == 0) {
            var  result=JSON.parse(xhr.response);
            console.info(11111);
                if(result.statu==0){
                    console.info(22222);

                }
        }

    }
}