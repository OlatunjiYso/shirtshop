import axios from 'axios';
import alertify from 'alertifyjs';
const rootUrl = '/api/v1/carts';

class CartService {

  /**
   * @description creates a new cartItem
   * @param { object } item - item details
   */
  static addItem(item) {
    const url = `${rootUrl}/`;
    axios.post(url, item)
    .then((res) => {
      let cartItems = localStorage.getItem('cartItemsIds') || '';
      cartItems += res.data.cartItem.id + ','
      localStorage.setItem('cartItemsIds', cartItems);
      alertify.set('notifier', 'position', 'top-center');
      alertify.success(res.data.message);
    })
    .catch((err) => {
      alertify.set('notifier', 'position', 'top-center');
      alertify.error(err.response.data.message);
    })

  }

  /**
   * @description fetches all cart items
   *  
   */
  static getItems(cartItemsIds) {
   return axios.get(`${rootUrl}/`, {params: {cartItems: cartItemsIds}});
  }


  static removeItem(cartItemId) {
   return axios.delete(`${rootUrl}/${cartItemId}`)
  }
}

export default CartService;