var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, '/Angular/dist')));
app.set('views', path.join(__dirname, './client/views'));
require('./server/config/mongoose.js'); // require mongoose

// Routes in ./server/config/routes.js
var routes = require('./server/config/routes.js') // linking routes to server.js
routes(app) // pass app into routes.js

app.listen(8000, function() {
    console.log('listening on port 8000');
})
