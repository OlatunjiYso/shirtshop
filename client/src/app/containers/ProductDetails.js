import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchShirt } from '../actions/product';
import DetailsCard from '../components/ShirtDetail';
import cartService from '../service/cart';

/**
 * @class Login
 * 
 * @extends React.Component
 */
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenColor: 'Green',
      chosenSize: 'XL',
      chosenQuantity: 1,
      id: 0
    }
    this.setChosenColor = this.setChosenColor.bind(this);
    this.setChosenSize = this.setChosenSize.bind(this);
    this.setChosenQuantity = this.setChosenQuantity.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  /**
  * @description - runs after page loads
  */
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchShirt(id);
    this.setState({
      ...this.state, id: id
    })
  }

  /**
   * @description listens to changes in the quantity field
   * 
   * @param { object } event - event object
   * @memberof ProductDetails
   */
  setChosenQuantity(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state, [name]: value
    })
  }

  /**
   * @description sets chosen color
   * 
   * @param { object } event - event object
   * @memberof ProductDetails
   */
  setChosenColor(color) {
    this.setState({
      ...this.state, 'chosenColor': color
    })
  }
  
  /**
   * @description sets chosen size
   * 
   * @param { object } event - event object
   * @memberof ProductDetails
   */
  setChosenSize(value) {
    this.setState({
      ...this.state, 'chosenSize': value
    })
  }

  /**
   * @description - adds a new item to cart.
   */
  addItemToCart() {
    const { id, chosenColor, chosenQuantity, chosenSize } = this.state;
    const attributes = chosenColor + ', ' + chosenSize;
    const item = {productId: id, attributes, quantity: chosenQuantity,buyNow: false};
    cartService.addItem(item);
  }

  /**
   * @description renders the Details page.
   * 
   * @memberof ProductDetails component
   */
  render() {
    const shirtDetails = this.props.productData.currentShirt;
    const { chosenColor, chosenQuantity, chosenSize } = this.state;
    return (
      <main>
        <DetailsCard
          shirtDetails={shirtDetails}
          chosenColor={chosenColor}
          chosenSize={chosenSize}
          chosenQuantity={chosenQuantity}
          setChosenColor={this.setChosenColor}
          setChosenSize={this.setChosenSize}
          setChosenQuantity={this.setChosenQuantity}
          addItemToCart={this.addItemToCart}
        />
      </main>
    );
  }
}


const mapStateToProps = state => {
  const productData = state.products;
  return {
    productData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchShirt },
    dispatch
  );
};

ProductDetails.propTypes = {
  productData: PropTypes.object.isRequired,
  fetchShirt: PropTypes.func.isRequired,
  match: PropTypes.any,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);