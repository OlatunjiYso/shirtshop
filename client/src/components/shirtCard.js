import React from 'react';
import propTypes from 'prop-types';

// import { prototype } from 'events';

const shirtCard = (props) => {
  const { name, id, price, imageUrl} = props;

  const refinedName = (name.length <= 18) ?
   name : name.slice(0, 16) + ' ...'
  return (
    <div className="shirtCardBody" key={id}>
        <img  src={require(`../images/products/${imageUrl}`)} />
      <h6 className="shirtCardName"> {refinedName}</h6>
      <h5 className="shirtCardPrice"> ${ price }</h5>
    </div>
  )
}

shirtCard.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  price: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired
};

export default shirtCard;