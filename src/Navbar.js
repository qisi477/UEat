import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const restaurantLinks = this.props.restaurants.map(r => (
      <li className='nav-item' key={r.name}>
        <NavLink exact to={`/${r.name}`} className='nav-link'>
          {r.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          UEat
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mr-auto' >
            {restaurantLinks}
          </ul>

          <ul className='navbar-nav' >
            <li className='nav-item'>
              <NavLink exact to='/login' className='nav-link'>
                Log In
              </NavLink>
            </li>
          </ul>

        </div>

      </nav>
    );
  }
}
export default Navbar;
