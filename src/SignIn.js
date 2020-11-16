import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { DatabaseContext } from './Database';
import './SignIn.css';

class SignIn extends Component {
    static contextType = DatabaseContext;
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleClick() {
        this.context.signIn(this.state.email, this.state.password);
        this.setState({ password: "" });
    }

    render() {
        return (
            <div className="SignIn">
                <form className="SignIn-form">

                    <h3 className="text-center">Sign In</h3>

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
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="button" className="btn btn-dark btn-lg btn-block"
                        onClick={this.handleClick}>Sign In</button>

                    <p className="text-center">
                        Don't have an account? <Link to='/Register'>Register</Link>
                    </p>

                </form>
            </div>
        );
    }

}

export default SignIn;