import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './LogIn.css';

class LogIn extends Component {
    render() {
        return (
            <div className="LogIn">
                <form className="LogIn-form">

                    <h3 className="text-center">Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="text-center">
                        Don't have an account? <Link to='/'>Sign Up</Link>
                    </p>

                </form>
            </div>
        );
    }

}

export default LogIn;