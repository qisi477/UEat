import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { DatabaseContext } from "./Database";
import "./Navbar.css"

class Navbar extends Component {
  static contextType = DatabaseContext;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.context.signOut();
  }

  render() {
    const restaurantLinks = this.context.restaurants.map(r => (
      <li className='nav-item' key={r.name}>
        <NavLink exact to={`/${r.name}`} className='nav-link'>
          {r.name}
        </NavLink>
      </li>
    ));

    console.log(this.context);
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>UEat</Link>

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
              {this.context.user !== null ?
                <button type="button" className="btn btn-link"
                  onClick={this.handleClick}>Sign Out</button> :
                <Link to='/SignIn' className="Navbar-link">Sign In</Link>}
            </li>
          </ul>

        </div>

      </nav>
    );
  }
}
export default Navbar;
