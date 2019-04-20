import express from 'express';

import authenticate from '../middleware/authentication';
import validator from '../middleware/validations';
import cartController from '../controllers/cart'
const cartHandler = express.Router();

// Creating cart Item
cartHandler.post(
  '/',
  authenticate,
  validator.validateAddingcartItem,
  cartController.createCartItem
);

// fetching cart Item
cartHandler.get(
  '/',
  authenticate,
  cartController.getMyCartItems
);

// removing cart item
cartHandler.delete(
  '/:cartItemId',
  authenticate,
  cartController.removeItem
)

export default cartHandler;