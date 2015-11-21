/** @jsx React.DOM */
var React = require('react');

var IndexPage = React.createClass({
    render: function() {
        return (
            <div className="jumbotron text-center">
                <div className="container animated fadeIn">
                    <h1>Welcome to Notrino!</h1>
                    <h3>Click below to get started.</h3>
                    <br/>
                    <a className="btn btn-primary btn-lg" href="/login" role="button">New Note</a>
                </div>
            </div>
        )
    }
});

module.exports = IndexPage;
