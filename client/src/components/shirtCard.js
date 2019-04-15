import React from 'react';
import propTypes from 'prop-types';

import sampleShirt from '../images/shirt.png';

const shirtCard = () => {
  return (
    <div className="shirtCardBody">
        <img src={sampleShirt} />
      <h6 className="shirtCardName"> Awesome shirt</h6>
      <h5 className="shirtCardPrice"> $56.00</h5>
    </div>
  )
}

shirtCard.propTypes = {
  name: propTypes.string,
};

export default shirtCard;