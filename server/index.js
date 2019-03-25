import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';


import customerController from './controllers/customer';
import customerHandler from './routes/customer';

const app = express();

// Parse incoming requests data.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use expressValidator for input validation
app.use(expressValidator());

// Route incoming request to appropriate handlers
app.use('/api/v1/customers/', customerHandler);

// Set listening port
app.listen(3000, () => {
  console.log('I am running live');
})