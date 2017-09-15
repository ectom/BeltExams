var mongoose = require('mongoose')
var Schema = mongoose.Schema;
// create Quote Schema
var QuestionSchema = new mongoose.Schema({
    question:  { type: String, required: true, minlength: 10 },
    description: { type: String, maxlength: 255 },
    _answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
}, {timestamps: true });

var AnswerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    answer:  { type: String, required: true, minlength: 5 },
    description: { type: String, maxlength: 255 },
    likes: { type: Number, default: 0 },
    _question: { type: Schema.Types.ObjectId }
}, {timestamps: true });

// regiser schema as a model
var Question = mongoose.model('Question', QuestionSchema)
var Answer = mongoose.model('Answer', AnswerSchema)
