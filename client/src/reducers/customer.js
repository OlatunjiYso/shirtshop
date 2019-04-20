import { SET_CURRENT_CUSTOMER } from '../actions/types';


const initialState = {
  customer: {}
};
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CUSTOMER:
      return {
        ...state,
        customer: action.customer
      };

    default:
      return state;
  }
};

export default customerReducer;