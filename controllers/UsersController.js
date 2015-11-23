// Require AWS & DynamoDB
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();

// Render the login
exports.renderLogin = function(req, res) {
    res.render('login');
}

// Check if the user exists or not
exports.checkUser = function(req, res) {
    console.log('check the user!');
    // FIXME

}

// render the registration page
exports.renderReg = function(req, res) {
    res.render('register');
}

// Create a new user
exports.createUser = function(req, res) {
    console.log("create the user!");
    // FIXME

}
