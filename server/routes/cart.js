import express from 'express';

import authenticate from '../middleware/authentication';
import cartController from '../controllers/cart'
const cartHandler = express.Router();

// Creating cart Item
cartHandler.post(
  '/',
  authenticate,
  cartController.createCartItem
);

// fetching cart Item
cartHandler.get(
  '/',
  authenticate,
  cartController.getMyCartItems
);


export default cartHandler;