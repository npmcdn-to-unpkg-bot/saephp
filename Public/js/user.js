var rxye={
	 URL: {
        regedit: function() {
            return './regedit';
        } ,
		regeditH:function(){
			return './User/regeditH';
		}
    },  
	USER:{ 

		init:function(){	 
			 document.getElementById("summit").onclick= function () {                            
                         rxye.USER.regedit(); 
						 
						 
                        }; 
		},
	
		regedit:function(){ 		
			var name=document.getElementById('name').value;
			var pwd=document.getElementById('pwd').value; 
			
			data={				
				'name':name,
				'pwd':$.md5(pwd) 
			};
			data={'data':data};	
	
			console.info(data);
		
		rxye.COMM(rxye.URL.regedit(),data,function usersult(result){  
		 
                                                                               //一个信息框
        var cookie_name ="name=" + escape(name) + ";" ;                                                               //编写cookie的键与值
        var cookie_name = cookie_name+ "path=/;";       //设置cookie的路径
                                                                          //设置cookie的域
        document.cookie =cookie_name;               //将这些信息写入cookie变量中去
                           
    
			  var cookie_id ="id=" + escape(result) + ";" ;                                                               //编写cookie的键与值
        var cookie_id = cookie_id+ "path=/;";       //设置cookie的路径
                                                                              
        document.cookie =cookie_id;     
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			
			document.cookie=name; 
			
			history.go(-1);
			 
		});
	},  
		
	},
	
	
	
	
	
	
	
	
	
	COMM:function(url,data,usersult){ 
		$.ajax({
			cache:false,
			type:"post",
			url:url,
			data:data,
			dataType:"jsonp",
			success:function(result){
				var res=JSON.parse(result);
				if(0==res.statu){
					usersult(res.date);
				}else{
					alert(res.msg);
				}
				
				
				
				console.info(result);
			},
			error : function(r){
				console.info(r);
				alert(r);
			}
			});
	}
	
	
}