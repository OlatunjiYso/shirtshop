import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './reducers/products'

let middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  middleware
  );
export default store;