import React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import data from './Data';

class App extends Component {
	static defaultProps = {
		restaurants : data,
		user : null
	};
	render() {
		return (
			<div>
				<Navbar restaurants={this.props.restaurants}/>
				<Routes restaurants={this.props.restaurants}/>
			</div>
		);
	}
}

export default App;
