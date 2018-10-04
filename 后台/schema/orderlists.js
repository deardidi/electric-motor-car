let mongoose = require('../mong/mongo.js'),      
Schema = mongoose.Schema;      
let OrderlistSchema = new Schema({
    username: { type: String },              
    creattime: {type: Date},
    goodsPrice: {type: Number}
});
module.exports = mongoose.model('Orderlist',OrderlistSchema)
