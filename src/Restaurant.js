import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Restaurant.css';

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.history.push(`/${this.props.name}`);
	}

	render() {
		return (
			<div className="Restaurant"
				onClick={this.handleClick}>
				<h1 className="Restaurant-title">{this.props.name}</h1>
				<div>
					<img src={this.props.img} alt={this.props.name}
						className="Restaurant-image" />
				</div>
			</div>
		);
	}
}

export default withRouter(Restaurant);
