import React from 'react';
import propTypes from 'prop-types';

const appnav = () => {
  return (
    <div className="navBody">
      <div className="leftNavbar">
        <h3>
          <span className="navLogo">
            ShirtShop
        </span>
        </h3>
      </div>
      <ul className="rightNavbar">
        <li className="navItem"> My Cart </li>
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