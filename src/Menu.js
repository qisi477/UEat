import React, { Component } from 'react';
import Dish from './Dish';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
			<div className="Menu">
				<h2>{this.props.restaurant.restaurantName}</h2>
				<p>{this.props.restaurant.restaurantLocation}</p>
				<div className="Menu-dish">
					{this.props.restaurant.restaurantMenu.map((m) => (
						<Dish key={m.id} 
						name={m.dishName} 
						img={m.dishImage} 
						descrip={m.dishDescrip}
						stock={m.stock}/>
					))}
				</div>
			</div>
		);
    }
}

export default Menu;