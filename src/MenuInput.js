import React, { Component } from "react";

class MenuInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            dishName: this.props.dishName,
            dishImage: this.props.dishImage,
            dishDescrip: this.props.dishDescrip,
            stock: this.props.stock
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleToggle() {
        if (this.state.stock === "true") {
            this.setState({ stock: "false" });
        } else {
            this.setState({ stock: "true" });
        }
    }

    handleSave() {
        this.props.updateDish(
            this.state.id,
            this.state.dishName,
            this.state.dishImage,
            this.state.dishDescrip,
            this.state.stock
        );
    }

    handleRemove() {
        this.props.removeDish(this.props.id);
    }

    render() {
        return (
            <div onBlur={this.handleSave} className="mb-2">
                <div className="form-row">
                    <div className=" col-md-3">
                        <input
                            type="text"
                            name="dishName"
                            className="form-control"
                            placeholder="Enter dish name"
                            value={this.state.dishName}
                            onChange={this.handleChange} />
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="dishImage"
                            className="form-control"
                            placeholder="Enter dish image URL"
                            value={this.state.dishImage}
                            onChange={this.handleChange} />
                    </div>
                    <button type="button"
                        className="btn btn-danger btn-sm col-md-1"
                        onClick={this.handleRemove}
                    >X</button>
                </div>
                <div className="form-row">
                    <div className="col-md-10">
                        <input
                            type="text"
                            name="dishDescrip"
                            className="form-control"
                            placeholder="Enter dish descrip"
                            value={this.state.dishDescrip}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-check form-check-inline ml-2">
                        <input
                            type="checkbox"
                            name="stock"
                            id="stock"
                            className="form-check-input"
                            value={this.state.stock}
                            checked={this.state.stock==="false"}
                            onChange={this.handleToggle} />
                        <label
                            className="form-check-label"
                            htmlFor="stock"
                        >OOS</label>
                    </div>
                </div>

            </div>
        );
    }
}

export default MenuInput;