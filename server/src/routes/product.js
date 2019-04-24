import express from 'express';

import productController from '../controllers/product'
import checkCache from '../middleware/redisCahe'

const productHandler = express.Router();

productHandler.get(
  '/',
  checkCache,
  productController.getAllProducts
);

productHandler.get(
  '/:id',
  checkCache,
  productController.getProduct
);


export default productHandler;
