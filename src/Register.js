import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Register.css'

class Register extends Component {
    


    render() {
        return (
            <div className="Register">
                <form className="Register-form">

                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Invite Code</label>
                        <input type="text" className="form-control" placeholder="Enter invite code" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="text-center">
                        Already have an account? <Link to='/SignIn'>Sign In</Link>
                    </p>

                </form>
            </div>
        );
    }
}

export default Register;