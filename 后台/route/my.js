const Token = require("../schema/token.js");
const User = require("../schema/user.js");
//用户中心
const userCenter = async function(ctx) {
   	let tokenid = ctx.request.body.tokenid;
    let creattime = Date.now();
    let result = {
        errCode: 0
    };
	let seachtoken = await Token.findOne({
            token: tokenid
     }).exec()
     console.log(tokenid)
     console.log(seachtoken.username)
	if (!seachtoken||seachtoken.overtime<creattime) {
        result.errCode = 1
        result.errMsg = '登录超时或者未登录，请重新登录'
        ctx.body = result
        return
 	}else {
 		let seachtel = await User.find({
            username:seachtoken.username
     	}).exec()
        result.errCode = 0
        result.errMsg = '个人中心查询成功'
        result.list={
        	"userName":seachtoken.username,
        	"usertel":seachtel[0].usertel
        }
        ctx.body = result
        return
    }   
};
module.exports = userCenter;
