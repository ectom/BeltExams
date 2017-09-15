var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	user: String,
    question: String,
	option1Name: String,
	votes1: Number,
    option2Name: String,
	votes2: Number,
    option3Name: String,
	votes3: Number,
    option4Name: String,
	votes4: Number
}, {timestamps: true });

mongoose.model('Poll', PollSchema);
