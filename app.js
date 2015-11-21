// Set up express
var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var port = process.env.PORT || 8000;

// Configure passport
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(expressSession({
    secret: 'notrino',
    resave: false,
    saveUninitialized: false
}));

// ROUTES
var routes = require('./routes/route.js');

// JSX Transpiler for server side rendering
// require('node-jsx').install();

// View engine setup
app.set('view engine', 'ejs');

//Load external assets for front-end
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', routes.index);
app.get('/signup', routes.signup);
app.get('/login', routes.signup);

// Add CORS Support for RESTful Interfaces
// This alows us to expose our api's to Notrino Mobile
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

var server = require('http').createServer(app).listen(port);
console.log("server listening on 8000");
