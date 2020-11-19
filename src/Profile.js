import React, { Component } from "react";
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <form className="Profile-form">

                    <h3 className="text-center">Profile</h3>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Enter first name" />
                        </div>

                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Enter last name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Restaurant Name</label>
                        <input
                            type="text"
                            name="restaurantName"
                            className="form-control"
                            placeholder="Enter restaurant name" />
                    </div>

                    <div className="form-group">
                        <label>Resraurant Logo</label>
                        <input
                            type="url"
                            name="resraurantLogo"
                            className="form-control"
                            placeholder="Enter resraurant logo" />
                    </div>

                    <div className="form-group">
                        <label>Resraurant Location</label>
                        <input
                            type="text"
                            name="resraurantLocation"
                            className="form-control"
                            placeholder="Enter resraurant location" />
                    </div>

                    <div className="form-group">
                        <div className="form-row">
                            <label className="col-md-6">Resraurant Menu</label>
                            <label className="col-md-6 text-right">Add</label>
                        </div>
                        <div className="form-row">
                            <div className=" col-md-6">
                                <input
                                    type="text"
                                    name="dishName"
                                    className="form-control"
                                    placeholder="Enter dish name" />
                            </div>
                            <div className=" col-md-6">
                                <input
                                    type="url"
                                    name="dishImage"
                                    className="form-control"
                                    placeholder="Enter dish image" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className=" col-md-6">
                            <button type="button"
                                className="btn btn-dark btn-lg btn-block"
                            >Save</button>
                        </div>

                        <div className=" col-md-6">
                            <button type="button"
                                className="btn btn-secondary btn-lg btn-block"
                            >Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default Profile;