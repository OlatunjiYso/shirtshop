import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';


import customerHandler from './routes/customer';
import productHandler from './routes/product';

// Load environmental variables
dotenv.config();

const app = express();

// Parse incoming requests data.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use expressValidator for input validation
app.use(expressValidator());

// Route incoming request to appropriate handlers
app.use('/api/v1/customers/', customerHandler);
app.use('/api/v1/products/', productHandler);

// Set listening port
app.listen(3000, () => {
  console.log('I am running live');
})