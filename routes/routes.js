var express = require('express');
var router = express.Router();

// Controllers for the various pages
var indexCtrl = require('../controllers/IndexController');
var userCtrl = require('../controllers/UsersController');
var dashCtrl = require('../controllers/DashController');
var quizCtrl = require('../controllers/QuizController');

// Index page
router.route('/')
    .get(indexCtrl.showIndex);

//Sign up / Login page
router.route('/login')
    .get(userCtrl.renderLogin)
    .post(userCtrl.checkUser);

router.route('/register')
    .get(userCtrl.renderReg)
    .post(userCtrl.createUser);

// Dashboard page
router.route('/dashboard/:id')
    .get(dashCtrl.renderDash)
    .delete(dashCtrl.deleteAccount);

router.route('/dashboard/:id/notes')
    .get(dashCtrl.renderNotes)
    .post(dashCtrl.createNote)
    .put(dashCtrl.editNote)
    .delete(dashCtrl.deleteNote);

router.route('/dashboard/:id/quizzes/:noteid')
    .get(quizCtrl.renderQuiz)
    .post(quizCtrl.createQuiz)
    .put(quizCtrl.editQuiz)
    .delete(quizCtrl.deleteQuiz);

module.exports = router;
