var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();

// Render the dasboard
exports.renderDash = function(req, res) {
    res.render('dash');
}

// Render the notes
exports.renderNotes = function(req, res) {
    res.render('notes');
}

// Create a new note
exports.createNote = function(req, res) {
    console.log("Create Notes!");
    // FIXME
}

// edit a saved note
exports.editNote = function(req, res) {
    console.log("Edited Notes!");
    // FIXME
}

// delete a note
exports.deleteNote = function(req, res) {
    console.log("deleted note!");
    // FIXME
}

exports.deleteAccount = function(req, res) {
    console.log("deleted account!");
    // FIXME
}
