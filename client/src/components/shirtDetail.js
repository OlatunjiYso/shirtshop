import React from 'react';
import propTypes from 'prop-types';

import sampleShirt from '../images/shirt.png';

const shirtDetail = () => {
  return (
    <div className="shirtDetailBody">
      <div className="imageSection">
        <h1 className="imageTitle"> {'<Shirt Title>'} </h1>
        <img src={sampleShirt} />
      </div>
      <div className="attributeSection">
        <p className="itemDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         </p>
        <h6 className="shirtPrice">
          Price:
          <span id="shirtActualValue">  {'$150.00'} </span>
          <span className="greyText"> / piece </span>
        </h6>
        <h6 className="shirtPrice">
          Discount Price:
        <span id="shirtDiscountValue"> {'$200.00'} </span>
          <span className="greyText"> / piece </span>
          <span id="discountPercentage"> - {((200 - 150) / 200) * 100}%</span>
        </h6>
        <div className="coreAttributes">
          <div className="specificAttributeSection">
            <span className="colorSelectionLabel"> Color: </span>
            <div className="colorCheckBox" id="whiteColor">
            </div>
            <div className="colorCheckBox" id="blackColor">
            </div>
            <div className="colorCheckBox" id="redColor">
            </div>
            <div className="colorCheckBox" id="orangeColor">
            </div>
            <div className="colorCheckBox" id="yellowColor">
            </div>
            <div className="colorCheckBox" id="greenColor">
            </div>
            <div className="colorCheckBox" id="blueColor">
            </div>
            <div className="colorCheckBox" id="indigoColor">
            </div>
            <div className="colorCheckBox" id="purpleColor">
            </div>
          </div>
          <div className="specificAttributeSection">
            <h6 className="sizeSelectionLabel"> Sizes: </h6>
            <h6 className="sizeCheckBox" id="s">
              Small
            </h6>
            <h6 className="sizeCheckBox" id="m">
              Medium
            </h6>
            <h6 className="sizeCheckBox" id="l">
              Large
            </h6>
            <h6 className="sizeCheckBox" id="xl">
              X-Large
            </h6>
            <h6 className="sizeCheckBox" id="xxl">
              XX-Large
            </h6>
          </div>
          <div className="specificAttributeSection">
            <h6 className="sizeSelectionLabel"> Quantity: </h6>
            <input id="selectedQuantity" type="number" min="1" max="20" />
          </div>
          <div className="specificAttributeSection">
            <h6 className="sizeSelectionLabel"> Your choice: </h6>
            <h6 className="sizeCheckBox" id="s">
              Small
            </h6>
            <div className="colorSelected" id="yellowColor">
            </div>
            <h6 id="selectedColorText"> { 20 } No(s)</h6>
          </div>
        </div>
        <div className="shirtActionButtons">
          <button id="buyNowButton" className="payButton" type="button"> Buy Now </button>
          <button id="addToCartButton" className="payButton" type="button"> Add to Cart </button>
        </div>
      </div>
    </div>
  )
}

shirtDetail.propTypes = {
  name: propTypes.string,
};

export default shirtDetail;