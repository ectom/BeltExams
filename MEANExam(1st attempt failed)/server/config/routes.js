var path = require('path')
var questions = require('../controllers/questions.js')
module.exports = function(app){
    app.get('/', (req, res, next)=>{
        res.json(true)
    });
    app.get('/show/:id', (req, res, next)=>{
        res.json(true)
    });
    app.post('/dashboard', (req, res, next)=>{
        res.json(true)
    });
    app.put('/show/:id', (req, res, next)=>{
        res.json(true)
    });
    app.delete('/show/:id', (req, res, next)=>{
        res.json(true)
    });
    app.all('*', req,res,next) => {
        res.sendFile(path.resolve("./Angular/dist/index.html"))
    }
}
