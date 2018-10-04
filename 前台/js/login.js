$(function(){
	var tip;
	$("#reg").click(function(){
		if($("#username").val()==""||$("#password").val()==""){
			$("#tip").text("用户名或密码为空");
			$("#tip").css("margin-top","0px")
			setTimeout(tip,5000)
			alert(1)
		}else{
			$.ajax({
				type:"post",
				url:url+"login",
				async:true,
				data:{
					username:$("#username").val(),
					userpwd:$("#password").val()
				},
				success:function(data){
					if(data.errcode==0){
						alert("登录成功")
						location.href="index.html";
						localStorage.setItem("username",$("#username").val());
						localStorage.setItem("token",data.tokenid);
					}else{
						$("#tip").text(data.msg);
						$("#tip").css("margin-top","0px")
						setTimeout(tip,5000)
						
					}
				}
			});	
		}
		function tip(){
				$("#tip").css("margin-top","-200px")
			}
	})
	$("#login").click(function(){
		$("#username").val("")
		$("#password").val("")
	})
		
	
	
})