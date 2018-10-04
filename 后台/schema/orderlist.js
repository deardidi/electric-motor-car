let mongoose = require('../mong/mongo.js'),      
Schema = mongoose.Schema;      
let OrderlistSchema = new Schema({
    username: { type: String },              
    goodslist: {type: Object},
    creattime: {type: Date},
    orderstate: {type: String},
    ordertotal: {type: Number}
});
module.exports = mongoose.model('Orderlists',OrderlistSchema)
