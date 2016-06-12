var rxye={
	 URL: {
        regedit: function() {
            return './regedit';
        } ,
		regeditH:function(){
			return './User/regeditH';
		}
    }, 
	/**
	
	   <tr>
         <th>����</th>
         <th>����</th>
         <th>����</th>
      </tr>
	*/
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
				'pwd':pwd 
			};
			data={'data':data};
	
	
			console.info(data);
		
		rxye.COMM(rxye.URL.regedit(),data,function usersult(result){ 
			 
			 
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
				usersult(result);
				console.info(result);
			},
			error : function(r){
				console.info(r);
				alert(r);
			}
			});
	}
	
	
}