import React, { Component } from 'react';
import Dish from './Dish';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
			<div className="Menu">
				<div className="Menu-dish">
					{this.props.restaurant.menu.map((m) => (
						<Dish key={m.dish} name={m.dish} img={m.img} />
					))}
				</div>
			</div>
		);
    }
}

export default Menu;