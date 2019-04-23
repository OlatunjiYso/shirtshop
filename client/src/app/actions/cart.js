import cartService from '../service/cart';

import { SET_CART_ITEMS, SET_PREPARED_ITEMS } from './types';

export const setCartItems = (cartItems, count) => ({
  type: SET_CART_ITEMS,
  cartItems,
  count
});

export const setPreparedItems = preparedItems => ({
  type: SET_PREPARED_ITEMS,
  preparedItems
});


/**
 * @description - fetches all cartItems for a user.
 */
export const fetchCartItems = () => (dispatch) => {
  return cartService.getItems()
    .then((response) => {
      const items = response.data.cartItems['rows'];
      const count = response.data.cartItems['count'];
      dispatch(setCartItems(items, count));
      const preparedItems = items.map((item) => {
        const { attributes, quantity } = item;
        const { name, price } = item.Product;
        return { attributes, quantity, name, price }
      })
      dispatch(setPreparedItems(preparedItems))
    })
    .catch((err) => {
      if (err.response.status == 404) { 
        dispatch(setCartItems([], 0));
        dispatch(setPreparedItems([]))
      }
    });
};
