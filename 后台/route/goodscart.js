const Good = require("../schema/ordercon.js");
async function goodscart(ctx){
	var mydata=ctx.request.query;
	var result={};
	var goodsfind=await Good.findById(mydata.goodid);
	console.log(goodsfind)
	console.log(mydata.goodid)
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
module.exports = goodscart;