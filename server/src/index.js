import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';


import customerHandler from './routes/customer';
import productHandler from './routes/product';
import categoryHandler from './routes/category';
import  departmentHandler from './routes/department';
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

// Allow cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  next();
});

// Route incoming request to appropriate handlers
app.use('/api/v1/customers/', customerHandler);
app.use('/api/v1/products/', productHandler);
app.use('/api/v1/categories/products', categoryHandler);
app.use('/api/v1/categories/', categoryHandler);
app.use('/api/v1/departments/', departmentHandler);
app.use('/api/v1/carts', cartHandler);
app.use('/api/v1/orders', orderHandler);
app.use('*', notFoundHandler);

// Set listening port
app.listen(process.env.PORT || 3000, () => {
  console.log('I am running live');
})


export default app;