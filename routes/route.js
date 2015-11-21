require('node-jsx').install();
var ReactDOM = require('react-dom/server');
var React = require('react');

var IndexPage = React.createFactory(require('../components/IndexPage'));
var SignupForm = React.createFactory(require('../components/SignupForm'));

module.exports = {
    index: function(req, res) {
        var markup = ReactDOM.renderToString(IndexPage({}));
        res.render('index.ejs', {reactOutput: markup});
    },
    signup: function(req, res) {
        var markup = ReactDOM.renderToString(SignupForm({
            url: "/api/v1/users"
        }));
        res.render('signup.ejs', {reactOutput: markup});
    }
}
