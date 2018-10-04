const Good = require("../schema/goods.js");

const goodslist = async function(ctx) {
	let ctx_query = ctx.query
	let num= parseInt(ctx_query.num)
	let page=parseInt(ctx_query.page)
	let skip=num*(page-1)
    let result = {
        errCode: 0
    };
	let goods1 = await Good.find({"goodsType":1}).limit(num).skip(skip);
	let goods2 = await Good.find({"goodsType":0}).limit(num).skip(skip);
	if(goods1==''&&goods2==''){
		result.errCode = 1
        result.errMsg = '没有找到查询结果'
        ctx.body = result
        return
	}else{
		result.errCode = 0
        result.errMsg = '查询到结果'
        result.list={goods1,goods2}
        ctx.body = result
        return
	}
};
module.exports = goodslist;



