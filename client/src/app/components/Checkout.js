import React, { Component } from "react";
import PropTypes from 'prop-types';
import PaystackButton from 'react-paystack';
import mailingService from '../service/mailService';

/**
 * @class Checkout
 * 
 * @extends React.Component
 */
class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      key: 'pk_test_9d1a4f2b1d74491836445285c1b8dec4d2d6010d',
      email: "foobar@example.com",
    }
    this.callback = this.callback.bind(this);
    this.close = this.close.bind(this);
    this.getReference = this.getReference.bind(this);
  }

  /**
   * payment response
   */
  callback (response){
    const text = `Your order was successful!. Your order reference is ${response.reference}`
    const maildetails = {
      from: 'fineshirtshopz@gmail.com',
      subject: "Thanks for your order",
      text
    }
    mailingService.sendMail(maildetails)
  }

  /**
   * closed payment response
   */
  close () {
    console.log("Payment closed");
  }

  /**
   * generate random paymemt reference
   */
  getReference() {
    //you can put any unique reference implementation code here
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  /**
   * @description renders the Checkout page.
   * 
   * @memberof Checkout component
   */
  render() {
    let total = 0;
    const allItems = this.props.location.state.preparedItems;
    const orderItems = allItems.map((item, index) => {
      const { attributes, name, quantity, price } = item;
      let attributesArray = attributes.split(',');
      const color = attributesArray[0];
      const size = attributesArray[1];
      const cost = Math.round(price * quantity);
      total += cost;
      return (
        <div className="orderRow" key={name}>
          <h4 className="serialNo"> {index + 1} </h4>
          <h4 className="productName"> {name}</h4>
          <h4 className="productColor">
            <div id={`color${color}`} className="productColorBox"></div>
          </h4>
          <h4 className="productSize"> {size} </h4>
          <h4 className="productQuantity"> {quantity} </h4>
          <h4 className="productUnitPrice"> {price} </h4>
          <h4 className="productCost"> {cost} </h4>
        </div>
      )
    })
    return (
      <div>
        <h3 className="orderTitle"> Order summary </h3>
        <div className="orderTable">
          <div className="orderRow">
            <h4 className="serialNo"> S/N</h4>
            <h4 className="productName"> Product</h4>
            <h4 className="productColor"> Color</h4>
            <h4 className="productSize">Size </h4>
            <h4 className="productQuantity"> Quantity </h4>
            <h4 className="productUnitPrice"> Unit Price </h4>
            <h4 className="productCost"> Cost </h4>
          </div>
          {orderItems}
        </div>
        <div className="grandTotal">
          <h3 > Grand Total <span id="grandTotalCost"> ${total}</span> </h3>

        </div >
              <span id="payStackBtn">
              <PaystackButton
                text="Make Payment"
                callback={this.callback}
                close={this.close}
                disabled={false} 
                embed={true} 
                reference={this.getReference()}
                email={this.state.email}
                amount={total*100}
                paystackkey={this.state.key}
                tag="button"
              />
              </span>
              <div id="testPaymentCard">
                <h6> Card Number: 408 408 408 408 408 1 </h6>
                <h6> Expiry Date: 12 / 28 </h6>
                <h6> CVV: 408 </h6>
              </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.any
}

export default Checkout;