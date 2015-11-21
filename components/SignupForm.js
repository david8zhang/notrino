/** @jsx React.DOM */
var React = require('react');

var EmailField = React.createClass({
    render: function() {
        return (
            <div>
                <label className="align">Email: </label>
                <input type="text" id="email" name="name" required></input>
            </div>
        );
    }
});

var SignupForm = React.createClass({
    getInitialState: function() {
        return {
            email: "Enter an email",
            username: "Enter a username",
            password: "Enter a password",
            message: "",
            hasAccount: true
        };
    },
    handleUsernameChange: function(e) {
        this.setState({username: e.target.value});
    },
    handlePasswordChange: function(e) {
        this.setState({password: e.target.value});
    },
    handleEmailChange: function(e) {
        this.setState({username: e.target.value});
    },
    toggleHasAccount: function(e) {
        this.setState({hasAccount: !this.state.hasAccount });
    },
    handleSubmit: function(e) {
        if (this.state.hasAccount) {
            $.ajax({
                type: "POST",
                url: this.props.url + "/login",
                dataType: 'json',
                cache: false,
                success: function() {
                    this.setState({message: "Success!"});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.log(err);
                    this.setState({message: err});
                }.bind(this)
            })
        } else {
            $.ajax({
                type: "POST",
                url: this.props.url + "/register",
                dataType: 'json',
                cache: false,
                success: function() {
                    this.setState({message: "Account Created!"});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.log(err);
                    this.setState({message: "Error creating account!"})
                }.bind(this)
            })
        }
    },
    render: function() {
        return (
            <div className="panel-body">
              <br/>
              <form action='/register' method='post'>
                { this.state.hasAccount ? null : <EmailField onChange={ this.handleEmailchange } />}
                <br/>
                <div>
                    <label for="name">Username: </label>
                    <input type="text" id="name" name="name" onChange={ this.handleUsernameChange } required></input>
                </div>
                <br/>
                <div>
                    <label for="name">Password: </label>
                    <input type="password" id="pass" name="pass" onChange={ this.handlePasswordChange } required></input>
                </div>
                <br/>
                <a className="btn btn-primary btn-lg" onClick={ this.handleSubmit } role="button">
                    { this.state.hasAccount ? "Login" : "Create Account" }
                </a>
                <br/>
                <a href="#" onClick={ this.toggleHasAccount }>
                    { this.state.hasAccount ? "Need an account? Register now!" : "Already have an account? Login here." }
                </a>
              </form>
            </div>
        );
    }
});

module.exports = SignupForm;
