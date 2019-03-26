import express from 'express';

import productController from '../controllers/product'

const productHandler = express.Router();

productHandler.get(
  '/',
  productController.getAllProducts
)



export default productHandler;
