import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DatabaseContext } from './Database';
import './Register.css'

class Register extends Component {
    static contextType = DatabaseContext;
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            inviteCode: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleClick() {
        if (this.isValid()) {
            this.context.signUp(this.state.email, this.state.password);
        }
    }

    isValid() {
        if (this.state.password !== this.state.confirmPassword) {
            alert("Confirm password doesn't match");
            this.setState({ confirmPassword: "" });
            return false;
        } else if (this.state.inviteCode !== "WelcomeToUEat") {
            alert("Invalid invite code");
            this.setState({ inviteCode: "" });
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className="Register">
                <form className="Register-form">

                    <h3 className="text-center">Register</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Enter password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Invite Code</label>
                        <input
                            type="text"
                            name="inviteCode"
                            className="form-control"
                            placeholder="Enter invite code"
                            value={this.state.inviteCode}
                            onChange={this.handleChange} />
                    </div>

                    <button type="button" className="btn btn-dark btn-lg btn-block"
                        onClick={this.handleClick}>Register</button>
                        
                    <p className="text-center">
                        Already have an account? <Link to='/SignIn'>Sign In</Link>
                    </p>

                </form>
            </div>
        );
    }
}

export default Register;