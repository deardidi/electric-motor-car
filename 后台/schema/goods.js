var mongoose = require("../mong/mongo.js"),
Schema = mongoose.Schema;      
	let GoodSchema = new Schema({ 
	    goodsName : { type: String},              
	    goodsType: {type: Number},
	    goodsPrice: {type: Number},
	    goodsImg: {type: String},
	    goodsColor: {type: String},
	    goodsNum: {type: Number}
	});
module.exports = mongoose.model('Good',GoodSchema)
