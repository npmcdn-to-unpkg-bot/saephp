var rxye={
	 URL: {
        regedit: function() {
            return './User/getUser';
        } 
    }, 
	/**
	
	   <tr>
         <th>Ãû³Æ</th>
         <th>³ÇÊĞ</th>
         <th>ÃÜÂë</th>
      </tr>
	*/
	USER:{		
		regedit:function(){ 
		rxye.COMM(rxye.URL.regedit(),data,function usersult(result){ 
			var table=document.getElementById('user'); 
			for(i=0;i<result.length;i++){
				console.info(result[i]);
				var row=table.insertRow(i+1);
				var cell1=row.insertCell(0);
				var cell2=row.insertCell(1);
				var cell3=row.insertCell(2);
				cell1.innerHTML=result[i].id;
				cell2.innerHTML=result[i].name;
				cell3.innerHTML='***';
			}  
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
				alert('faill');
			}
			});
	}
	
	
}