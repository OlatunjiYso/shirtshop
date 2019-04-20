import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import productReducer from './reducers/products';
import cartReducer from './reducers/cart';
import customerReducer from './reducers/customer';

const allReducers = { products: productReducer, carts: cartReducer, customers: customerReducer };

const rootReducer = combineReducers(allReducers);

let middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  middleware
  );
export default store;

