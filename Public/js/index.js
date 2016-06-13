
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
 

            rxye.COMM(rxye.URL.user(), data, function usersult(result) {
                var table = document.getElementById('user');              
                $('#user tr').empty();
                if (result.length<10){
                    isfinish=true;
                }
				 document.getElementById('page').innerHTML = page;
				
				  var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    cell1.innerHTML =  '<div><div class=title>id</div></div>' ;
                    cell2.innerHTML = '<div><div class=title>name</div></div>';
                    cell3.innerHTML = '<div><div class=title>密码</div></div>' ;
                for (i = 0; i < result.length; i++) {
                    //console.info(result[i]);
                    var row = table.insertRow(i+1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    cell1.innerHTML = '<div><div class=tablebody>'+  result[i].id+'</div></div>' ;
                    cell2.innerHTML = '<div><div class=tablebody>'+ result[i].name +'</div></div>';
                    cell3.innerHTML = '<div><div class=tablebody>'+ '***' +'</div></div>';
                }
            });
        },

		getLocalName:function(){			
			var name=rxye.USER.getCookie('name'); 
				var id=rxye.USER.getCookie('id'); 
				if(name!=null){					
				document.getElementById('reg').style.display='none';
				document.getElementById('name').innerHTML=name;
		}
			 
		}, 
		
		getCookie:function (name)
			{
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
			else
			return null;
			},
		
		
        onevent: function () { 			

            document.getElementById('next').onclick = function () {
                console.info(document.getElementById('page').innerText);
                if (!isfinish){
                rxye.USER.getUser(eval(1 + parseInt(document.getElementById('page').innerText)));
               // document.getElementById('page').innerHTML = (eval(1 + parseInt(document.getElementById('page').innerText)));
			   }
            };

            document.getElementById('before').onclick = function () {
                console.info(document.getElementById('page').innerText);
				
                if (parseInt(document.getElementById('page').innerText) > 1) {
					isfinish=false;
                    rxye.USER.getUser(eval(parseInt(document.getElementById('page').innerText) - 1));
                    //document.getElementById('page').innerHTML = (eval(parseInt(document.getElementById('page').innerText) - 1));
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
				var res=JSON.parse(result);				
				if(0==res.statu){
				console.info(res.date);
                usersult(res.date);
				}else{
					isfinish=true;
				}	
				
                
            },
            error: function (r) {
                alert('faill');
            }
        });
    }


}