import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

import { fetchCartItems } from '../actions/cart';
import cartService from '../service/cart';
import CartItems from '../components/CartItems';

/**
 * @class Cart
 * 
 * @extends React.Component
 */
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preparedItems: []
    }
    this.removeItem = this.removeItem.bind(this);
  }

  /**
  * @description - runs after page loads
  */
  componentDidMount() {
    this.props.fetchCartItems();
  }

  /**
   * @description removes a cart item
   * 
   * @param { string } cartItemId - id of cart item
   * @memberof Cart
   */
  removeItem(cartItemId) {
   cartService.removeItem(cartItemId)
   .then((res) => {
     let cartItems = localStorage.getItem('cartItemsIds');
     let cartItemArray = cartItems.split(',');
     let newCartItems = cartItemArray.filter((item) => {
       return item != cartItemId
     });
     localStorage.setItem('cartItemsIds', newCartItems);
    this.props.fetchCartItems()
    alertify.set('notifier', 'position', 'top-center');
    alertify.success(res.data.message);
    
  })
  .catch((err) => {
    alertify.set('notifier', 'position', 'top-center');
    alertify.error(err.response.data.message);
  })
  }
  


  /**
   * @description renders the Cart page.
   * 
   * @memberof Cart component
   */
  render() {
    const { cartItems, count } = this.props.cartData;
    const { preparedItems } = this.props.cartData;
    const { loggedIn } = this.props.userData.customer;
    return (
      <main id="cartPage">
        <CartItems
          removeItem={this.removeItem}
          cartItems={cartItems}
          preparedItems={preparedItems}
          count={count}
          loggedIn={loggedIn}

        />
      </main>
    );
  }
}


const mapStateToProps = state => {
  const cartData = state.carts;
  const userData = state.customers;
  return {
    cartData, userData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchCartItems },
    dispatch
  );
};

Cart.propTypes = {
  cartData: PropTypes.object.isRequired,
  fetchCartItems: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);