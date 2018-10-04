$(function(){
	var goodsid=window.location.search.substr(1);
	console.log(goodsid)
//	商品详情
	$.ajax({
		type:"get",
		url:url+"goodscon",
		data:{
			goodsid:goodsid
		},
		async:true,
		success:function(data){
			console.log(data)
			$("#good-pic").attr("src",url+data.list.goodsImg)
			$("#goods-price1").text(data.list.goodsName);
			$("#goods-price").text(data.list.goodsPrice);
			$("#goods-major").text(data.list.goodsColor);
			$(".goods-details p").text(data.list.goodsInfo);
			$("#sp").text(data.list.goodsPrice)
			goodsImg=data.list.goodsImg
			goodsType=data.list.goodsType
			goodsColor=data.list.goodsColor
		}
	});
	
		
		var goodsid1=window.location.search.substr(1);
		console.log(goodsid)
		console.log(11)
			$.ajax({
				type:"get",
				url:url+"goodscart",
				data:{
					goodid:goodsid1
				},
				async:true,
				success:function(data){
					console.log(22)
					console.log("1223"+data)
					$("#good-pic").attr("src",url+data.list.goodsImg)
					$("#goods-price1").text(data.list.goodsName);
					$("#goods-price").text(data.list.goodsPrice);
					$("#goods-major").text(data.list.goodsColor);
					$(".goods-details p").text(data.list.goodsInfo);
					goodsImg=data.list.goodsImg
					goodsType=data.list.goodsType
					goodsColor=data.list.goodsColor
				}
			});

//	收藏
	$(".addCart").click(function(){
		alert(1)
		$.ajax({
			type:"post",
			url:url+"orderadd",
			async:true,
			data:{
				username : localStorage.getItem("username"),
				goodsName: $("#goods-price1").text(),
				goodsImg:goodsImg,
				goodsPrice:$("#goods-price").text(),
				goodsType:goodsType,
				goodsColor:goodsColor,
				token: localStorage.getItem("token")
			},
			success:function(data){
				if(data.errcode!=0){
					window.location.href="login.html";
				}else{
					$(".addCart").text("已添加").attr("disabled","disabled")
					location.href="cart.html"
				}
			}
		});
	})
	$("#num").change(function(){
		$("#sp").text($("#goods-price").text()*$("#num").val())
	})



   var havename=[]
	$(".gopay").click(function(){
		newname={name:$("#goods-price1").text(),index:$("#num").val(),
		color:$("#goods-major").text(),num:$("#goods-price").text(),img:$("#good-pic").attr("src")}
		havename.push(newname);
		console.log(havename)
		console.log($("#good-pic").attr("src"))
//	立即购买
	$.ajax({
			type:"post",
			url:url+"orderlistAdd",
			async:true,
			data:{
				tokenid:localStorage.getItem('token'),
		        username:localStorage.getItem('username'),
		        orderList:havename,
		        orderTotal:$("#sp").text()
			},
			success:function(data){
				if(data.errcode!=0){
					alert("添加成功")
					console.log(data)
					window.location.href="dingdan.html";
				}else{
					$(".addCart").text("已添加").attr("disabled","disabled")
				}
			}
		});
	})
	
})