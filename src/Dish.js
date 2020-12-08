import React, { Component } from 'react';
import './Dish.css';

class Dish extends Component {
	render() {
		return (
			<div className="Dish">
				<h1 className="Dish-title">{this.props.name}</h1>
				<p>{this.props.descrip}</p>
				<div>
					<img src={this.props.img} alt={this.props.name}
						className={this.props.stock === "true" ?
							"Dish-image" : "Dish-image-gray"} />
				</div>
			</div>
		);
	}
}

export default Dish;