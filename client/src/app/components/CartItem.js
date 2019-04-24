import React from 'react';
import propTypes from 'prop-types';

const cartItem = (props) => {
  const { name, id, price, image, removeItem, quantity, attributes } = props;
  const attributesArray = attributes.split(',')
  const color = attributesArray[0];
  const size = attributesArray[1]
  const refinedName = (name.length <= 18) ?
    name : name.slice(0, 16) + ' ...'
  return (
    <div className="cartItemBody" key={id} >
      <img src={require(`../images/products/${image}`)} alt="shirtImage"/>
      <h6 className="cartItemName"> {refinedName}</h6>
      <h5 className="cartItemPrice"> ${price}</h5>
      <div id="cartItemAttributes">
        <div id="cartItemColor">
          <div className="productColorBox" id={`color${color}`}></div>
        </div>
        <h4 id="cartItemSize"> {size}</h4>
        <h4 id="cartItemQuantity"> {quantity} No(s)</h4>
      </div>
      <button
       id="cartItemRemoveButton"
       onClick={() => removeItem(id)}>
        Remove
         </button>
    </div>
  )
}

cartItem.propTypes = {
  removeItem: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  price: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  quantity: propTypes.number,
  attributes: propTypes.string,
};

export default cartItem;