import express from 'express';

import departmentController from '../controllers/department';

const departmentHandler = express.Router();

departmentHandler.get(
  '/',
  departmentController.getDepartments
);


export default departmentHandler;
