import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Dish from './Dish';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
			<div className="Menu">
				<div className="Menu-dish">
					{this.props.restaurant.menu.map((m) => (
						<Dish key={uuid()} name={m.dish} img={m.img} />
					))}
				</div>
			</div>
		);
    }
}

export default Menu;