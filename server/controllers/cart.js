import db from '../models/';

const { ShoppingCart, Product } = db;


/**
 * Contains all static methods to:
 *    create a cart item
 *    delete a cart item
 *    view cart items     
 */
class CartController {

  /**
   * @description - creates a cart item
   * 
   * @param {object} req - request object
   * @param {res} res - response object
   * 
   * @returns {json}
   */
  static createCartItem(req, res) {

    const { productId, attributes, quantity, buyNow } = req.body;
    const { id } = req.user;
    ShoppingCart
      .create({
          productId,
          CustomerId: id,
          attributes,
          quantity,
          buyNow
      })
      .then((cartItem) => {
        res.status(201)
        .json({
          message: 'item added to cart!',
          cartItem
        })
      })
      .catch((err) => {
        console.log(err)
        res.status(501)
        .json({
          message: 'internal server error',
          error: err.msg
        })
      })
  }

  /**
   * 
   * @param { object } req - request object
   * @param { object } res - response object
   */
  static getMyCartItems(req, res) {

    ShoppingCart
      .findAndCountAll({
        where: {
          CustomerId: req.user.id
        },
        include: [
          { model: Product }
       ]
      })
      .then((cartItems) => {
        const itemCount = cartItems.count;
        if (itemCount == 0) {
          return res.status(404)
          .json({
            message: 'nothing in cart yet',
          })
        }
        res.status(200)
        .json({
          message: 'item found!',
          cartItems,
          itemCount
        })
      })
      .catch((err) => {
        res.status(500)
        .json({
          message: 'internal server error',
          error: err
        })
      });
  }
}


export default CartController;