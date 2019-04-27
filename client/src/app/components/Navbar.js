import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const appnav = (props) => {
  const { loggedIn, logout } = props;
  let renderedNav;
  if (loggedIn) {
    renderedNav = (
      <div className="navBody">
        <div className="leftNavbar">
          <Link to="/">
            <h3>
              <span className="navLogo">
                ShirtShop
        </span>
            </h3>
          </Link>
        </div>
        <ul className="rightNavbar">
          <li className="navItem"><Link to="/cart" className="white-link"> My Cart </Link></li>
          <li className="navItem" onClick={logout}> Logout </li>
          <li className="navItem"> Promo Deals </li>
        </ul>
      </div>
    )
  } else {
    renderedNav = (
      <div className="navBody">
        <div className="leftNavbar">
          <Link to="/">
            <h3>
              <span className="navLogo">
                ShirtShop
        </span>
            </h3>
          </Link>
        </div>
        <ul className="rightNavbar">
          <li className="navItem"><Link to="/cart" className="white-link"> My Cart </Link></li>
          <li className="navItem"><Link to="/login" className="white-link"> Login </Link></li>
          <li className="navItem"> <Link to="/signup" className="white-link"> Signup </Link> </li>
        </ul>
      </div>
    )
  }

  return (renderedNav)
}

appnav.propTypes = {
  loggedIn: propTypes.bool,
  logout: propTypes.func
};

export default appnav;