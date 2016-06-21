/**
 * Created by lishangfan on 2016/6/20.
 */

var rxye = {
    URL: {
        UPLOAD: function () {
            return getRootPath() + '/Index/upload';
        },

        getRootPath: function () {
            var curWwwPath = window.document.location.href;
            var pathName = window.document.location.pathname;
            var pos = curWwwPath.indexOf(pathName);
            var localhostPaht = curWwwPath.substring(0, pos);
            var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
            return (localhostPaht + projectName);
        },
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
            var FileController = rxye.URL.UPLOAD;
            var form = new FormData();
            form.append("file", fileObj);
            xhr.onreadystatechange = handleStateChange(xhr);
            xhr.open("post", FileController, true);
            xhr.send(form);
        },
        handleStateChange: function (xhr) {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 0) {

                    alert('OK');
                }

            }
        }

    }


};

