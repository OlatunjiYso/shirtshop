import express from 'express';

import validator from '../middleware/validations';
import cartController from '../controllers/cart'
const cartHandler = express.Router();

// Creating cart Item
cartHandler.post(
  '/',
  validator.validateAddingcartItem,
  cartController.createCartItem
);

// fetching cart Item
cartHandler.get(
  '/',
  cartController.getMyCartItems
);

// removing bulk cart items
cartHandler.delete(
  '/',
  cartController.removeItem
)

// removing cart item
cartHandler.delete(
  '/:cartItemId',
  cartController.removeItem
)

export default cartHandler;