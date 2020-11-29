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
            restaurantLogo: "",
            restaurantLocation: "",
            restaurantMenu: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.addDish = this.addDish.bind(this);
        this.removeDish = this.removeDish.bind(this);
        this.updateDish = this.updateDish.bind(this);
    }

    componentDidMount(){
        if(this.context.profile !== ""){
            this.setState(this.context.profile);
        }
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSave() {
        this.context.writeUserData(this.context.user.uid, this.state);
    }

    handleCancel() {
        this.setState({
            firstName: "",
            lastName: "",
            restaurantName: "",
            restaurantLogo: "",
            restaurantLocation: "",
            restaurantMenu: []
        });
    }

    addDish() {
        this.setState({
            restaurantMenu: [...this.state.restaurantMenu, {
                id: uuid(),
                dishName: "",
                dishImage: ""
            }]
        });
    }

    removeDish(id) {
        this.setState({
            restaurantMenu: this.state.restaurantMenu.filter(dish => dish.id !== id)
        });
    }

    updateDish(id, updatedDishName, updatedDishImage) {
        const updatedMenu = this.state.restaurantMenu.map(dish => {
            if (dish.id === id) {
                return {
                    ...dish,
                    dishName: updatedDishName,
                    dishImage: updatedDishImage
                };
            }
            return dish;
        });
        this.setState({ restaurantMenu: updatedMenu });
    }

    render() {
        const menu = this.state.restaurantMenu.map(m => {
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
                        <label>Restaurant Logo</label>
                        <input
                            type="url"
                            name="restaurantLogo"
                            className="form-control"
                            placeholder="Enter restaurant logo"
                            value={this.state.restaurantLogo}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Restaurant Location</label>
                        <input
                            type="text"
                            name="restaurantLocation"
                            className="form-control"
                            placeholder="Enter restaurant location"
                            value={this.state.restaurantLocation}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <div className="form-row">
                            <label className="col-md-6">Restaurant Menu</label>
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