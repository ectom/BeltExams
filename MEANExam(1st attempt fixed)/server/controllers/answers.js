var mongoose = require('mongoose')
var Answer = mongoose.model('Answer')
var Question = mongoose.model('Question')

module.exports = {
    getAll: function(req, res){
        Question.findOne({_id: req.params.q_id})
        .populate('_answers')    // gets all answers associated with question
        .exec(function(errors, questions){
            if(errors){
                res.status(500).json(errors)
            }
            else {
                res.json(questions)
            }
        })
    },
    create: function(req, res){
        Question.findOne({_id: req.params.q_id}, function(errors, question){
            var answer = new Answer(req.body)
            answer._question = question._id // links question to new Answer
            answer.save(function(errors){
                question._answers.push(answer)
                question.save(function(errors){
                    if(errors){
                        res.status(500).json(errors)
                    }
                    else {
                        console.log('successfully linked answer');
                        res.json(true)
                    }
                })
            })
        })
    },
    liked: function(req, res){
        Answer.findOneAndUpdate({_id: req.params.a_id}, {$inc: {'likes': 1}})

    }

}
