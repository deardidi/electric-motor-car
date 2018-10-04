const Ordercon = require("../schema/ordercon.js");
const Orderlist = require("../schema/orderlists.js");
const Token = require("../schema/token.js");
async function orderadd(ctx){
	var mydata=ctx.request.body;
	var result={};
	var tokenfind=await Token.find({
		username : mydata.username,
		token: mydata.token,
	})
	console.log(tokenfind)
	if(tokenfind.length==0){
		result.errcode=1;
		result.msg="没有找到授权信息，请重新登录";
		ctx.body=result;
	}else if(tokenfind.overtime<Date.now()){
		result.errcode=2;
		result.msg="授权过期，请重新登录";
		ctx.body=result;
	}else{
		var orderlist=new Orderlist({
			userName : mydata.username,
			goodsPrice: mydata.goodsPrice,
			creatTime: Date.now()
		})
		var orderlistadd=await orderlist.save();
		var ordercon=new Ordercon({
			goodsId: orderlistadd._id,
			userName : mydata.username,
			goodsName : mydata.goodsName,
			goodsImg:mydata.goodsImg,
			goodsPrice:mydata.goodsPrice,
			goodsType: mydata.goodsType,
			goodsColor: mydata.goodsColor,
			creatTime: Date.now()
		})
		
		await ordercon.save();
		result.errcode=0;
		result.msg="订单添加成功";
		ctx.body=result;
	}
	
}
module.exports = orderadd;

