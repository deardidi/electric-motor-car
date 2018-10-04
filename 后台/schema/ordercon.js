var mongoose = require("../mong/mongo.js"),
Schema = mongoose.Schema;
	var OrderconSchema = new Schema({
		userName: { type: String },  
	    goodsName: { type: String },
	    goodsId: { type: String },
	    creatTime: {type: Date},
	    goodsImg: {type: String },
	    goodsPrice: {type: Number},
	    goodsType: {type: Number},
	    goodsColor: {type: String}
	});
module.exports = mongoose.model("Ordercon",OrderconSchema)