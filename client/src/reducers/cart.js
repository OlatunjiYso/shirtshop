import { SET_CART_ITEMS, SET_PREPARED_ITEMS } from '../actions/types';


const initialState = {
  cartItems: [],
  preparedItems: []
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
        count: action.count
      };

    case SET_PREPARED_ITEMS:
      return {
        ...state,
        preparedItems: action.preparedItems,
      };

    default:
      return state;
  }
};

export default cartReducer;