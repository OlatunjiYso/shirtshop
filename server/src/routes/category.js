import express from 'express';

import categoryController from '../controllers/category'

import validator from '../middleware/validations';
const categoryHandler = express.Router();

categoryHandler.get(
  '/:departmentId',
  validator.validateFetchCategories,
  categoryController.getCategories
);

categoryHandler.get(
  '/',
  categoryController.getCategoryProducts
);


export default categoryHandler;
