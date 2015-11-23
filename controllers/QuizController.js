var AWS = require('aws-sdk');
var dyanamodb = new AWS.DynamoDB();

// Render the quizzes page
exports.renderQuiz = function(req, res) {
    res.render('quiz');
}

// Create the quizzes
exports.createQuiz = function(req, res) {
    console.log("Created a quiz!");
    // FIXME
}

// Edit the quizzes page
exports.editQuiz = function(req, res) {
    console.log("edit the Quiz!");
    // FIXME
}

// Delete the quizzes page
exports.deleteQuiz = function(req, res) {
    console.log("Deleted the quiz!");
    // FIXME
}
