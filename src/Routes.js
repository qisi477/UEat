import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Menu from './Menu';
import SignIn from './SignIn';
import Register from './Register';
import { DatabaseContext } from './Database';

class Routes extends Component {
    static contextType = DatabaseContext;
    render() {
        const getMenu = props => {
            let input = props.match.params.name;
            let cur = this.context.restaurants.find(
                restaurant => restaurant.name.toLowerCase() === input.toLowerCase()
            );
            return cur == null ?
                <Redirect to='/' /> :
                <Menu restaurant={cur} />;
        }
        return (
            <Switch>
                <Route exact path='/' render={() => <RestaurantList />}>
                </Route>
                <Route exact path='/SignIn' render={() => <SignIn />}></Route>
                <Route exact path='/Register' render={() => <Register />}></Route>
                <Route exact path='/:name' render={getMenu}></Route>
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default Routes;