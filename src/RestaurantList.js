import React, { Component } from 'react';
import Restaurant from './Restaurant';
import './RestaurantList.css';

class RestaurantList extends Component {
	render() {
		return (
			<div className="RestaurantList">
				<div className="RestaurantList-restaurant">
					{this.props.restaurants.map((r) => (
						<Restaurant key={r.name} name={r.name} img={r.logo} />
					))}
				</div>
			</div>
		);
	}
}
export default RestaurantList;
