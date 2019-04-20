import express from 'express';

import productController from '../controllers/product'

const searchHandler = express.Router();

searchHandler.get(
  '/products',
  productController.searchProduct
);


export default searchHandler;
