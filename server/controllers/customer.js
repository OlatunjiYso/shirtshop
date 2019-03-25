import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../models';
import { userInfo } from 'os';

const { Customer } = db;

/**
 * Customer Controller houses the methods to carry out:
 *  - Creating a new customer
 *  - Logging in a registered customer
 *  - Issuing of jsonwebtoken upon succesful signin
*/
class CustomerController {

  /**
   * @description -creates a new customer with a hashed password and issues a json web token
   * 
   * @param { Object } req -the request object
   * @param { Object } res -the response object
   * 
   * @return { json } message
   */
  static createCustomer(req, res) {
    // Hash the password before saving to db
    const password = bcrypt.hashSync(req.body.password, 10);
    // Handle the rest of validation in a middleware .. . 

    // Get parameters from the request body
    const {
      shippingRegionId, name, email, creditCard, address1, address2, city, religion, postalCode, dayPhone, evePhone, mobPhone
    } = req.body

    Customer
      .create({
        shippingRegionId,
        name,
        email,
        password,
        creditCard,
        address1,
        address2,
        city,
        religion,
        postalCode,
        dayPhone,
        evePhone,
        mobPhone
      })
      .then((customer) => {
        res.status(201)
        .json({
          message: 'You are signed up!',
          email: customer.email,
          id: customer.id,
        })
      })
      .catch((err) => {
        res.status(500)
        .json({
          error: err.message
        })
      })
  }

  /**
   * @description signs in a registered customer
   * 
   * @param { object } req -request object.
   * @param { object } res - response object.
   * 
   * @return { undefined }
   */
  static login(req, res) {
    // Handle validation against null inputs in middleware
    Customer
        .findOne({ 
          where: { email: req.body.email }
        })
        .then((customer) => {
          if(!customer) {
            return res.status(404)
                .json({
                  message: 'No such customer exixts'
                })
          }
          bcrypt.compare(req.body.password, customer.password)
          .then((validPassword) => {
            if(!validPassword) {
              return res.status(401)
              .json({
                message: 'Incorrect password'
              })
            }
            // issue jsonwebtoken that lasts for 12 x 60 minutes
            const token = jwt.sign(
              {
                id: customer.id,
                email: userInfo.email
              },
              process.env.SECRET_KEY,
              { expiresIn: '720m' }
            );
            res.status(201)
              .json({
                message: 'You are logged In',
                token,
                email: customer.email
              });
          })

        })
        .catch((err) => {
          res.status(500)
          .json({
            error: err.message
          })
        });
  }
}


export default CustomerController;