import React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import DatabaseProvider from './Database';

class App extends Component {
	render() {
		return (
			<DatabaseProvider>
				<Navbar />
				<Routes />
			</DatabaseProvider>
		);
	}
}

export default App;
