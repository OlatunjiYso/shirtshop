import express from 'express';

import checkCache from '../middleware/redisCahe'

import departmentController from '../controllers/department';

const departmentHandler = express.Router();

departmentHandler.get(
  '/',
  checkCache,
  departmentController.getDepartments
);


export default departmentHandler;
