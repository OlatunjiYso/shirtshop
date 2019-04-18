import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const appnav = () => {
  return (
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
        <li className="navItem"> Logout </li>
        <li className="navItem"> Promo Deals </li>
      </ul>
    </div>
  )
}

appnav.propTypes = {
  name: propTypes.string,
};

export default appnav;