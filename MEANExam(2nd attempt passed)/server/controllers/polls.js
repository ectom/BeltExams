var mongoose = require('mongoose')
var Poll = mongoose.model('Poll');

module.exports = {
    getAll: function(req, res){
        Poll.find({})
		.then(poll => {
			res.json(poll);
		})
		.catch(errors => {
			res.status(500).json(errors)
		})
    },
    createPoll: function(req, res){
        var poll = new Poll(req.body);
		poll.save()
		.then( () => {
			console.log('successfully created poll');
			res.json(true);
		})
		.catch(errors => res.status(500).json(errors))
    },
    getOne: function(req, res){
        console.log('id HEREeig yeghfvwudgsn fuhbfuehr bg')
        Poll.findOne({_id: req.params.id})
        .then(poll => {
        	res.json(poll);
        })
        .catch(errors => {
            res.status(500).json(errors);
        })
    },
    vote: function(req, res){
        var x = req.params.str
        console.log('drdhgvhibjk', req.params)
        if(x === 'votes1')
        {
            Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {votes1: 1}})
            .exec(function(err, db_res) {
                if (err) {
                    throw err;
                    console.log('error', err)
                    res.status(500).json(err)
                }
                else {
                    console.log(db_res);
                    res.json(true)
                }
            })
        }
        else if(x === 'votes2')
        {
            Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {votes2: 1}})
            .exec(function(err, db_res) {
                if (err) {
                    throw err;
                    console.log('error', err)
                    res.status(500).json(err)
                }
                else {
                    console.log(db_res);
                    res.json(true)
                }
            })
        }
        else if(x === 'votes3')
        {
            Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {votes3: 1}})
            .exec(function(err, db_res) {
                if (err) {
                    throw err;
                    console.log('error', err)
                    res.status(500).json(err)
                }
                else {
                    console.log(db_res);
                    res.json(true)
                }
            })
        }
        else if(x === 'votes4')
        {
            Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {votes4: 1}})
            .exec(function(err, db_res) {
                if (err) {
                    throw err;
                    console.log('error', err)
                    res.status(500).json(err)
                }
                else {
                    console.log(db_res);
                    res.json(true)
                }
            })
        }
    },
    destroy: function(req, res){
        Poll.remove({_id: req.params.id}, function(err, result){
            if(err){
                console.log(err);
            }
            else{
                res.json(true)
            }
        })
    }

}
