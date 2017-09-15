var path = require('path')
var questions = require('../controllers/questions.js')
var answers = require('../controllers/answers.js')

module.exports = function(app){
    app.get('/questions', questions.getAll)
    app.post('/questions', questions.create)
    app.get('/questions/:id', questions.getOne)
    app.get('/answers/:q_id', answers.getAll)
    app.post('/answers/:q_id', answers.create)
    app.put('/answers/:a_id', answers.liked)
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}
