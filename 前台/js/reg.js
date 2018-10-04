$(function(){
	var tip;
	$("#reg").click(function(){
		if($("#username").val().length>12||$("#username").val().length<6){
			$(".username").text("用户名必须为6-12位");
			$("#tip").css("margin-top","0px")
			$("#tip").text("用户名必须为6-12位");
			setTimeout(tip,5000)
			return;
		}
		else if($("#password").val().length>12||$("#password").val().length<6){
			$(".password").text("密码必须为6-12位");
			$("#tip").css("margin-top","0px")
			$("#tip").text("密码必须为6-12位");
			setTimeout(tip,5000)
			return;
		}else if($("#password").val()!=$("#passwrdAg").val()){
			$(".passwrdAg").text("密码与重复密码不一致");
			$("#tip").css("margin-top","0px")
			$("#tip").text("密码与重复密码不一致");
			setTimeout(tip,5000)
			return;
		}else if($("#usertel").val()==""){
			$(".usertel").text("请输入手机号");
			$("#tip").css("margin-top","0px")
			$("#tip").text("请输入手机号");
			setTimeout(tip,5000)
			return;
		}else{
			$.ajax({
				type:"post",
				url:url+"reg",
				async:true,
				data:{
					username:$("#username").val(),
					passwrd:$("#password").val(),
					tel:$("#usertel").val()
				},
				success:function(data){
					if(data.errcode==0){
						alert("注册成功")
						location.href="login.html"
					}else{
						$("#tip").css("margin-top","-150px")
						$("#tip").text(data.msg);
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
		alert(1)
		$("#username").val("");
		$("#password").val("");
		$("#passwrdAg").val("");
		$("#usertel").val("");
	})
	
	
})
