const User = require("../schema/user.js");
async function reg(ctx){
	var mydata=ctx.request.body;
	var result={};
	var finderuser=await User.find({username:mydata.username});
	var findertel=await User.find({usertel:mydata.tel});
	console.log(mydata)
		if(finderuser.length!=0){
			result.errcode=1;
			result.msg="用户名已经存在";
			ctx.response.body=result;
		}else if(findertel.length!=0){
			result.errcode=2;
			result.msg="手机号已经被注册";
			ctx.response.body=result;
		}else{
			var user=new User(
				{
					username:mydata.username,
					userpwd:mydata.passwrd,
					usertel:mydata.tel
				}
			)
			user.save();
			result.errcode=0;
			result.msg="注册成功";
			ctx.response.body=result;
		}
}
module.exports = reg;

