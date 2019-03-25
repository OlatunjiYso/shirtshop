import express from 'express';

import customerController from '../controllers/customer';
import validator from '../middleware/validations';

const customerHandler = express.Router();

customerHandler.post(
  '/signup',
  validator.validateSignup,
  validator.checkEmailExistence,
  validator.checkCreditCardExistence,
  customerController.createCustomer,
);

customerHandler.post(
  '/login',
  validator.validateLogin,
  customerController.login,
);




export default customerHandler;
