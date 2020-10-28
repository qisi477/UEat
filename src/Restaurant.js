import React, { Component } from 'react';
import './Restaurant.css';

class Restaurant extends Component {
	render() {
		return (
			<div className="Restaurant">
				<h1 className="Restaurant-title">{this.props.name}</h1>
				<div>
					<img src={this.props.img} alt={this.props.name } 
					className="Restaurant-image"/>		
				</div>
			</div>
		);
	}
}

export default Restaurant;
