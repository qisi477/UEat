import React, { Component } from 'react';
import Dish from './Dish';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
			<div className="Menu">
				<div className="Menu-dish">
					{this.props.restaurant.restaurantMenu.map((m) => (
						<Dish key={m.id} name={m.dishName} img={m.dishImage} />
					))}
				</div>
			</div>
		);
    }
}

export default Menu;