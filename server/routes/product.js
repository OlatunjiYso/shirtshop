import express from 'express';

import productController from '../controllers/product'

const productHandler = express.Router();

productHandler.get(
  '/',
  productController.getAllProducts
);

productHandler.get(
  '/:id',
  productController.getProduct
);

productHandler.get(
  '/category',
  productController.getCategories
);

productHandler.get(
  '/category_product',
  productController.getCategoryProducts
);



export default productHandler;
