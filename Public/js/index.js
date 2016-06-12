
var  isfinish=false;
var rxye = {
    URL: {
        user: function () {
            return './User/getUser';
        }
    },
    /**

     <tr>
     <th>名称</th>
     <th>城市</th>
     <th>密码</th>
     </tr>
     */
    USER: {


        getUser: function (page) {
            data = {
                'page': page - 1,
                'count': 10
            };

            console.info(data);

            rxye.COMM(rxye.URL.user(), data, function usersult(result) {


                var table = document.getElementById('user');
                console.info(result);
                $('#user tr').empty();
                if (result.length<10){
                    isfinish=true;
                }
                for (i = 0; i < result.length; i++) {


                    console.info(result[i]);
                    var row = table.insertRow(i + 1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    cell1.innerHTML = result[i].id;
                    cell2.innerHTML = result[i].name;
                    cell3.innerHTML = '***';
                }
            });
        },


        onevent: function () {

            document.getElementById('next').onclick = function () {
                console.info(document.getElementById('page').innerText);
                if (!isfinish){
                rxye.USER.getUser(eval(1 + parseInt(document.getElementById('page').innerText)));

                document.getElementById('page').innerHTML = (eval(1 + parseInt(document.getElementById('page').innerText)));}
            };

            document.getElementById('before').onclick = function () {
                console.info(document.getElementById('page').innerText);
                if (parseInt(document.getElementById('page').innerText) >= 1) {

                    rxye.USER.getUser(eval(parseInt(document.getElementById('page').innerText) - 1));
                    document.getElementById('page').innerHTML = (eval(parseInt(document.getElementById('page').innerText) - 1));
                }
            };

        }


    },


    COMM: function (url, data, usersult) {
        $.ajax({
            cache: false,
            type: "post",
            url: url,
            data: data,
            dataType: "jsonp",
            success: function (result) {
                usersult(result);
                console.info(result);
            },
            error: function (r) {
                alert('faill');
            }
        });
    }


}