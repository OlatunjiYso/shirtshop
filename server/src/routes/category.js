import express from 'express';

import checkCache from '../middleware/redisCahe'
import categoryController from '../controllers/category'
import validator from '../middleware/validations';
const categoryHandler = express.Router();

categoryHandler.get(
  '/:departmentId',
  validator.validateFetchCategories,
  checkCache,
  categoryController.getCategories
);

categoryHandler.get(
  '/',
  validator.validateFetchCategoryProduct,
  checkCache,
  categoryController.getCategoryProducts
);


export default categoryHandler;
