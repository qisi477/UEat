import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Menu from './Menu';
import LogIn from './LogIn';

class Routes extends Component {
    render() {
        const getMenu = props => {
            let input = props.match.params.name;
            let cur = this.props.restaurants.find(
                restaurant => restaurant.name.toLowerCase() === input.toLowerCase()
            );
            return cur == null ?
                <Redirect to='/' /> :
                <Menu restaurant={cur} />;
        }
        return (
            <Switch>
                <Route exact path='/' render={() =>
                    <RestaurantList restaurants={this.props.restaurants} />}>
                </Route>
                <Route exact path='/Login' render={() => <LogIn />}></Route>
                <Route exact path='/:name' render={getMenu}></Route>
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default Routes;