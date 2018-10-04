$(function(){
console.log(localStorage.getItem("username"))
	$.ajax({
		type:"post",
		url:url+"orderlist",
		async:true,
		data:{
			username:localStorage.getItem("username"),
			token:localStorage.getItem("token")
		},
		success:function(data){
			console.log(data)
			var html="";
			for(var i=0;i<data.list.length;i++){
				html+='<div class="cart-list"><div class="cart-items"><dl><dt><a href="detail.html?'+data.list[i]._id+'"><img src="'
				+url+data.list[i].goodsImg+
				'"/></a></dt><dd>名称：'+data.list[i].goodsName+
			 	'</dd><dd class="price">定价：￥<span>'+data.list[i].goodsPrice+
			 	'</span></dd></dl><div class="icon-del del-item" rel="'
			 	+data.list[i]._id+
			 	'"><a href="#">删除</a></div></div></div>'
			}
			$(".container").html(html);
		}
	})
})
//删除
	$(".container").delegate(".icon-del","click",function(){
		var orderid=$(this).attr("rel");
		var thisItem=$(this);
		$('.modals').css('display','block');
		$('.ok').click(function(){
			$('.modals').css('display','none');
			$.ajax({
				type:"post",
				url:url+"orderremove",
				async:true,
				data:{
					orderid:orderid,
					username:localStorage.getItem("username"),
					token:localStorage.getItem("token")
				},
				success:function(data){
					if(data.errcode==0){
						location.reload();
					}
				}
			});
		})
	})
	
	