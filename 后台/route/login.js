const User = require("../schema/user.js");
const Token = require("../schema/token.js");
const stringrandom  = require("string-random");
async function login(ctx){
	var mydata=ctx.request.body;
	console.log(mydata)
	var result={};
	var userdata={
		username : mydata.username,
		userpwd: mydata.userpwd
	}
	var userfind=await User.find(userdata);
	if(userfind.length==0){
		result.errcode=1;
		result.msg="用户名和密码不正确";	
		ctx.body=result;
	}else{
		var tokenfind=await Token.find({
			username : mydata.username
		})
		var tokenid=stringrandom(32);
		var time=Date.now();
		var overtime=time+3*24*60*60*1000;
		if(tokenfind.length==0){
			var tokensave=new Token({
				username : mydata.username,
				token: tokenid,
				overtime: overtime
			})
			tokensave.save();
			result.errcode=0;
			result.msg="登录成功";
			result.tokenid=tokenid;
			result.username=mydata.username;
			ctx.body=result;
		}else{
			await Token.update(
				{
					username : mydata.username
				},
				{
					username : mydata.username,
					token: tokenid,
					overtime: overtime
				}	
			)
			result.errcode=0;
			result.msg="登录成功";
			result.tokenid=tokenid;
			result.username=mydata.username;
			ctx.body=result;
		}
	}
}
module.exports = login;

