import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return <h1> {this.props.restaurant.name} Menu </h1>
    }
}

export default Menu;