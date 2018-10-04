var mongoose = require("../mong/mongo.js"),
Schema = mongoose.Schema;
	var UserSchema = new Schema({
		username : {type: String },
		userpwd: {type: String},
		usertel: {type: String}
	});
module.exports = mongoose.model("User",UserSchema)