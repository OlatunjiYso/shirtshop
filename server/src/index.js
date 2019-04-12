import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';


import customerHandler from './routes/customer';
import productHandler from './routes/product';
import categoryHandler from './routes/category';
import cartHandler from './routes/cart';
import orderHandler from './routes/order';
import notFoundHandler from './routes/notFound';

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
app.use('/api/v1/categories/products', categoryHandler);
app.use('/api/v1/categories/', categoryHandler);
app.use('/api/v1/carts', cartHandler);
app.use('/api/v1/orders', orderHandler);
app.use('*', notFoundHandler);

// Set listening port
app.listen(process.env.PORT || 3000, () => {
  console.log('I am running live');
})


export default app;