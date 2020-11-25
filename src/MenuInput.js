import React, { Component } from "react";

class MenuInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            dishName: this.props.dishName,
            dishImage: this.props.dishImage,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSave() {
        this.props.updateDish(this.state.id, this.state.dishName, this.state.dishImage);
    }

    handleRemove() {
        this.props.removeDish(this.props.id);
    }

    render() {
        return (
            <div className="form-row" onBlur={this.handleSave}>
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
                        placeholder="Enter dish image"
                        value={this.state.dishImage}
                        onChange={this.handleChange} />
                </div>
                <button type="button"
                    className="btn btn-danger btn-sm col-md-1"
                    onClick={this.handleRemove}
                >X</button>
            </div>
        );
    }
}

export default MenuInput;