import React, { Component } from 'react';
import './Dish.css';

class Dish extends Component {
	render() {
		return (
			<div className="Dish">
				<h1 className="Dish-title">{this.props.name}</h1>
				<div>
					<img src={this.props.img} alt={this.props.name}
						className="Dish-image" />
				</div>
			</div>
		);
	}
}

export default Dish;