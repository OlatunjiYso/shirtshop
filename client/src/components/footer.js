import React from 'react';
import propTypes from 'prop-types';

const footer = () => {
  return (
    <div className="footerBody">
      <div className="leftFooter">
        <h3>
          <span className="leftFooterHeader"> ShirtShop </span>
        </h3>
        <p>
          lorem ipsum loret lorem ipsum lorem ipsum loret lorem ipsum
          lorem ipsum loret lorem ipsum lorem ipsum loret lorem ipsum
       </p>
      </div>

      <div className="rightFooter">
        <div className="footerAddress">
          <h3>
            <span className="listHeader"> Contact us </span>
          </h3>
          <ul className="footerItems">
            <li className="footerItem"> No 345 Alanburging Florirado </li>
            <li className="footerItem"> Damsterrma Island </li>
            <li className="footerItem"> Qoukka Bay </li>
          </ul>
        </div>
        <div className="footerLinks">
          <h3>
            <span className="listHeader"> Useful links </span>
          </h3>
          <ul className="footerItems">
            <li className="footerItem"> About us </li>
            <li className="footerItem"> Shipping policies </li>
            <li className="footerItem"> Our policies </li>
            <li className="footerItem"> Join us </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

footer.propTypes = {
  name: propTypes.string,
};

export default footer;