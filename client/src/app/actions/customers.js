import { SET_CURRENT_CUSTOMER } from './types';

const setCurrentCustomer = (customer) => ({
  type: SET_CURRENT_CUSTOMER,
  customer
});

export default setCurrentCustomer;

