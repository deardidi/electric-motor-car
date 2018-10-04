const Good = require("../schema/goods.js");

async function goodscon(ctx){
	var mydata=ctx.request.query;
	var result={};
	var goodsfind=await Good.findById(mydata.goodsid);
	if(goodsfind.length==0){
		result.errcode=1;
		result.msg="没有找到对应的商品";	
		ctx.body=result;
	}else{
		result.errcode=0;
		result.msg="查询成功";
		result.list=goodsfind;
		ctx.body=result;	
	}
}
module.exports = goodscon;

