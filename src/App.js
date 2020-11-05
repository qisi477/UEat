import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import data from './data';
import Menu from './Menu';

class App extends Component {
	render() {
		const getMenu = props => {
			let input = props.match.params.name;
			let cur = data.find(
				restaurant => restaurant.name.toLowerCase() === input.toLowerCase()
			);
			return cur == null ?
				<Redirect to='/' /> :
				<Menu restaurant={cur} />;
		}
		return (
			<Switch>
				<Route exact path='/' render={() => <RestaurantList />}></Route>
				<Route exact path='/:name' render={getMenu}></Route>
				<Redirect to='/' />
			</Switch>
		);
	}
}

export default App;
