const Ordercon = require("../schema/ordercon.js");
const Orderlist = require("../schema/orderlist.js");
const Token = require("../schema/token.js");
async function orderlist(ctx){
	var mydata=ctx.request.body;
	var result={};
	var tokenfind=await Token.find({
		username : mydata.username,
		token: mydata.token
	})
	if(tokenfind.length==0){
		result.errcode=1;
		result.msg="没有找到授权信息，请重新登录";
		ctx.body=result;
	}else if(tokenfind.overtime<Date.now()){
		result.errcode=2;
		result.msg="授权过期，请重新登录";
		ctx.body=result;
	}else{
		var orderlistfinder=await Ordercon.find({
			userName:mydata.username
		})
		result.list=orderlistfinder;
		result.errcode=0;
		result.msg="订单查询成功";
		ctx.body=result;
	}
}
module.exports = orderlist;

