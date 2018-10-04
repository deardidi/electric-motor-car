const Orderlist = require("../schema/orderlist.js");
const Token = require("../schema/token.js");
//订单添加功能
const orderlistAdd = async function(ctx) {
   	let tokenid = ctx.request.body.tokenid;
   	let username = ctx.request.body.username;
   	let goodslist = ctx.request.body.orderList;
   	let ordertotal = ctx.request.body.orderTotal;
    let creattime = Date.now();
    let result = {
        errCode: 0
    };
	let seachtoken = await Token.findOne({
            token: tokenid
        }).exec()
	if (!seachtoken||seachtoken.overtime<creattime) {
        result.errCode = 1
        result.errMsg = '登录超时或者未登录，请重新登录'
        ctx.body = result
        return
 }else {
        orderlistadd = new Orderlist({
            'username' : username,
		    'creattime' : creattime,
		    'orderstate' : "nopay",
		    'goodslist' : goodslist,
		    'ordertotal':ordertotal
        })
        orderlistadd = await orderlistadd.save();
        result.errCode = 0
        result.errMsg = '订单增加成功'
        ctx.body = result
        return
   }   
};
module.exports = orderlistAdd;