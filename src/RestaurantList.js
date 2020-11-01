import React, { Component } from 'react';
import data from './data';
import Restaurant from './Restaurant';
import './RestaurantList.css';

class RestaurantList extends Component {
	static defaultProps = {
		Restaurants : data
	};
	render() {
		return (
			<div className="RestaurantList">
				<div className="RestaurantList-restaurant">
					{this.props.Restaurants.map((r) => (
						<Restaurant key = {r.name} name={r.name} img={r.img} />
					))}
				</div>
			</div>
		);
	}
}
export default RestaurantList;
