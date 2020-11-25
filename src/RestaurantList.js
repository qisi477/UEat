import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Restaurant from './Restaurant';
import { DatabaseContext } from './Database';
import './RestaurantList.css';

class RestaurantList extends Component {
	static contextType = DatabaseContext;
	render() {
		return (
			<div className="RestaurantList">
				<div className="RestaurantList-restaurant">
					{this.context.restaurants.map((r) => (
						<Restaurant key={uuid()} name={r.name} img={r.logo} />
					))}
				</div>
			</div>
		);
	}
}
export default RestaurantList;
