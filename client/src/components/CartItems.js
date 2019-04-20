import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import CartItem from './CartItem';

const CartItems = (props) => {
  const { removeItem, cartItems, count, preparedItems } = props;

if (cartItems.length > 0) {
  // Generate cart Items
  const allCartItems = cartItems.map((item) => {
    const { attributes, quantity, id } = item
    const { name, price, image } = item.Product;

    return (
      <CartItem
        name={name}
        key={id}
        id={id}
        price={price}
        image={image}
        quantity={quantity}
        removeItem={removeItem}
        attributes={attributes}
      />
    )
  })
  return (
    <div >
      <div id="cartHeader">
        <h1> Your cart <span className="greenText"> {count} item(s)</span></h1>
      </div>
      <div id="cartItemsBody">
        {allCartItems}
      </div>
      <div>
       
        <Link to={{
          pathname: '/checkout',
          state: {
            preparedItems
          }
        }}
        id="cartBuyAll">Buy All</Link>
      </div>
    </div>
  )
} else {
  return (<h1 className="centeredText"> No Items in cart yet</h1>)
}
  
  
}

CartItems.propTypes = {
  removeItem: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  count: PropTypes.number,
  preparedItems: PropTypes.any.isRequired,
};
export default CartItems;