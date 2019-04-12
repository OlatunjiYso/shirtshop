import express from 'express';

import customerController from '../controllers/customer';
import validator from '../middleware/validations';
import authenticate from '../middleware/authentication';

const customerHandler = express.Router();

customerHandler.post(
  '/signup',
  validator.validateSignup,
  validator.checkEmailExistence,
  customerController.createCustomer,
);

customerHandler.put(
  '/details',
  authenticate,
  validator.checkCreditCardExistence,
  customerController.updateCustomerDetail
)

customerHandler.post(
  '/login',
  validator.validateLogin,
  customerController.login,
);




export default customerHandler;
