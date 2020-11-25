import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import MenuInput from './MenuInput';
import { DatabaseContext } from './Database';
import './Profile.css'

class Profile extends Component {
    static contextType = DatabaseContext;
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            restaurantName: "",
            resraurantLogo: "",
            resraurantLocation: "",
            resraurantMenu: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.addDish = this.addDish.bind(this);
        this.removeDish = this.removeDish.bind(this);
        this.updateDish = this.updateDish.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSave() {
        console.log(this.state);
    }

    handleCancel() {
        this.setState({
            firstName: "",
            lastName: "",
            restaurantName: "",
            resraurantLogo: "",
            resraurantLocation: "",
            resraurantMenu: []
        });
    }

    addDish() {
        this.setState({
            resraurantMenu: [...this.state.resraurantMenu, {
                id: uuid(),
                dishName: "",
                dishImage: ""
            }]
        });
    }

    removeDish(id) {
        this.setState({
            resraurantMenu: this.state.resraurantMenu.filter(dish => dish.id !== id)
        });
    }

    updateDish(id, updatedDishName, updatedDishImage) {
        const updatedMenu = this.state.resraurantMenu.map(dish => {
            if (dish.id === id) {
                return {
                    ...dish,
                    dishName: updatedDishName,
                    dishImage: updatedDishImage
                };
            }
            return dish;
        });
        this.setState({ resraurantMenu: updatedMenu });
    }

    render() {
        const menu = this.state.resraurantMenu.map(m => {
            return <MenuInput key={m.id} id={m.id}
                dishName={m.dishName} dishImage={m.dishImage}
                removeDish={this.removeDish}
                updateDish={this.updateDish} />
        });
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
                                placeholder="Enter first name"
                                value={this.state.firstName}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Enter last name"
                                value={this.state.lastName}
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Restaurant Name</label>
                        <input
                            type="text"
                            name="restaurantName"
                            className="form-control"
                            placeholder="Enter restaurant name"
                            value={this.state.restaurantName}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Resraurant Logo</label>
                        <input
                            type="url"
                            name="resraurantLogo"
                            className="form-control"
                            placeholder="Enter resraurant logo"
                            value={this.state.resraurantLogo}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Resraurant Location</label>
                        <input
                            type="text"
                            name="resraurantLocation"
                            className="form-control"
                            placeholder="Enter resraurant location"
                            value={this.state.resraurantLocation}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <div className="form-row">
                            <label className="col-md-6">Resraurant Menu</label>
                            <button type="button"
                                className="btn btn-link btn-sm ml-auto"
                                onClick={this.addDish}
                            >Add</button>
                        </div>
                        {menu}
                    </div>

                    <div className="form-row">
                        <div className=" col-md-6">
                            <button type="button"
                                className="btn btn-dark btn-lg btn-block"
                                onClick={this.handleSave}>Save</button>
                        </div>

                        <div className=" col-md-6">
                            <button type="button"
                                className="btn btn-secondary btn-lg btn-block"
                                onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default Profile;