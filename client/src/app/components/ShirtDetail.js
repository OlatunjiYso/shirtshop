import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const shirtDetail = (props) => {
  const {
    chosenColor,
    chosenSize,
    shirtDetails,
    chosenQuantity,
    setChosenColor,
    setChosenSize,
    setChosenQuantity,
    addItemToCart
  } = props;
  if (shirtDetails) {
    // Fetch shirt parameters
    const { name, image, price, discountedPrice, description } = shirtDetails.foundProduct;
    

    // const { attributes } = shirtDetails;
    // let availableSizes = [];
    // let availableColors = []
    // attributes.map((attribute) => {
    //   if (attribute['Size']) {
    //     availableSizes.push(attribute['Size'])
    //   }
    //   if (attribute['Color']) {
    //     availableColors.push(attribute['Color'])
    //   }
    // })

    // use same attributes for all
    let availableColors = ['White', 'Black', 'Red', 'Orange', 'Yellow', 'Blue', 'Green', 'Indigo', 'Purple'];
    let availableSizes = ['S', 'M', 'L', 'XXL', 'XL']


    // Generate color blocks
    const colorOptions = availableColors.map((color) => {
      return (
        <div className="colorCheckBox" id={`color${color}`} key={color} value={color} onClick={() => setChosenColor(color)}>
        </div>
      )
    })

    // Generate size blocks
    const sizesOptions = availableSizes.map((size) => {
      return (
        <h6 className="sizeCheckBox" key={size} value={size} onClick={() => setChosenSize(size)}>
          {size}
        </h6>
      )
    })
    // choose to show payments buttons or not.
    const paymentButtons = (localStorage.token) ?

    ( <div className="shirtActionButtons">
    <Link to={{
      pathname: '/checkout',
      state: {
        preparedItems: [{
          name,
          attributes: chosenColor + ', ' + chosenSize,
          quantity: chosenQuantity,
          price
        }]
      }
    }}>
    <button className="payButton" >
        Buy Now 
    </button>
    </Link>

    <button
      id="addToCartButton"
      className="payButton"
      onClick={addItemToCart}
      type="button">
      Add to Cart
        </button>
  </div>) : <h5> Please login to purchase or add to cart </h5>


    return (
      <div className="shirtDetailBody">
        {/* Left side */}
        <div className="imageSection">
          <h1 className="imageTitle"> {name} </h1>
          <img src={require(`../images/products/${image}`)} />
        </div>
        {/* Right side */}
        <div className="attributeSection">
          <p className="itemDescription">
            {description}
          </p>
          <h6 className="shirtPrice">
            Price:
            <span id="shirtActualValue">  ${price} </span>
            <span className="greyText"> / piece </span>
          </h6>
          <h6 className="shirtPrice">
            Discount Price:
          <span id="shirtDiscountValue"> ${(price - discountedPrice).toFixed(2)} </span>
            <span className="greyText"> / piece </span>
            <span id="discountPercentage"> - {((price - (price - discountedPrice)) / price).toFixed(2) * 100}%</span>
          </h6>
          <div className="coreAttributes">

            <div className="specificAttributeSection">
              <span className="colorSelectionLabel"> Color: </span>
              {colorOptions}
            </div>
            {/* select color */}
            <div className="specificAttributeSection">
              <h6 className="sizeSelectionLabel"> Sizes: </h6>
              {sizesOptions}
            </div>
            {/* Select quantity */}
            <div className="specificAttributeSection">
              <h6 className="sizeSelectionLabel"> Quantity: </h6>
              <input
                value={chosenQuantity}
                id="selectedQuantity"
                type="number"
                min="1"
                max="20"
                name="chosenQuantity"
                onChange={setChosenQuantity} />
            </div>
            {/* Display User selectiions */}
            <div className="specificAttributeSection">
              <h6 className="sizeSelectionLabel"> Your choice: </h6>
              <h6 className="sizeCheckBox" id="s">
                {chosenSize}
              </h6>
              <div className="colorSelected" id={`color${chosenColor}`}>
              </div>
              <h6 id="selectedColorText"> {chosenQuantity} No(s)</h6>
            </div>
          </div>
         { paymentButtons}
        </div>
      </div>
    )
  }
  return (
    <h3> Please wait . . . . . .  </h3>
  )
}

shirtDetail.propTypes = {
  shirtDetails: PropTypes.object,
  chosenColor: PropTypes.string.isRequired,
  chosenQuantity: PropTypes.any.isRequired,
  chosenSize: PropTypes.string.isRequired,
  setChosenColor: PropTypes.func.isRequired,
  setChosenQuantity: PropTypes.func.isRequired,
  setChosenSize: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default shirtDetail;