import express from 'express';

import mailController from '../controllers/mail';
import authenticate from '../middleware/authentication';

const mailHandler = express.Router();

mailHandler.post(
  '/',
  authenticate,
  mailController.sendMail
);


export default mailHandler;
