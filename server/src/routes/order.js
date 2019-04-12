import express from 'express';

import orderController from '../controllers/order';
import authenticate from '../middleware/authentication';
import validator from '../middleware/validations';


const orderHandler = express.Router();

orderHandler.post(
  '/',
  authenticate,
  validator.validateOrder,
  orderController.createOrder
   );


   export default orderHandler;

