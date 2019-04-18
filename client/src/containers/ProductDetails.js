import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchShirt } from '../actions/product';
import DetailsCard from '../components/shirtDetail';

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
      chosenQuantity: 1
    }
    this.setChosenColor = this.setChosenColor.bind(this);
    this.setChosenSize = this.setChosenSize.bind(this);
    this.setChosenQuantity = this.setChosenQuantity.bind(this);
  }

  /**
  * @description - runs after page loads
  */
  componentDidMount() {
    this.props.fetchShirt(13);
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
   * @description renders the Details page.
   * 
   * @memberof ProductDetails component
   */
  render() {
    const shirtDetails = this.props.productData.currentShirt;
    const { chosenColor, chosenQuantity, chosenSize } = this.state;
    return (
      <div>
        <DetailsCard
          shirtDetails={shirtDetails}
          chosenColor={chosenColor}
          chosenSize={chosenSize}
          chosenQuantity={chosenQuantity}
          setChosenColor={this.setChosenColor}
          setChosenSize={this.setChosenSize}
          setChosenQuantity={this.setChosenQuantity}
        />
      </div>
    );
  }
}


const mapStateToProps = state => {
  const productData = state;
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);