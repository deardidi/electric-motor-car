//const Ordercon = require("../schema/ordercon.js");
//const Orderlist = require("../schema/orderlist.js");
//const Token = require("../schema/token.js");
//async function orderremove(ctx){
//	var mydata=ctx.request.body;
//	var result={};
//	var tokenfind=await Token.find({
//		username : mydata.username,
//		token: mydata.token
//	})
//	console.log(tokenfind)
//	if(tokenfind.length==0){
//		result.errcode=1;
//		result.msg="没有找到授权信息，请重新登录";
//		ctx.body=result;
//	}else if(tokenfind.overtime<Date.now()){
//		result.errcode=2;
//		result.msg="授权过期，请重新登录";
//		ctx.body=result;
//	}else{
//		console.log(mydata.orderid)
//		var orderlistdelete=await Orderlist.remove({
//			_id:mydata.orderid
//		})
//		result.errcode=0;
//		result.msg="订单删除成功";
//		ctx.body=result;
//	}
//}
//module.exports = orderremove;

const Ordercon = require("../schema/ordercon.js");
const Orderlist = require("../schema/orderlist.js");
const Token = require("../schema/token.js");
async function orderremove(ctx){
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
		var orderlistdelete=await Orderlist.deleteOne({
			_id:mydata.id
		})
		var ordercondelete=await Ordercon.deleteOne({
			id:mydata.id
		})
		result.errcode=0;
		result.msg="订单删除成功";
		ctx.body=result;
	}
}
module.exports = orderremove;
