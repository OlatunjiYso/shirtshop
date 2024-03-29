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
    ShoppingCart
      .create({
          productId,
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
        res.status(501)
        .json({
          message: 'internal server error',
          error: err
        })
      })
  }

  /**
   * 
   * @param { object } req - request object
   * @param { object } res - response object
   */
  static getMyCartItems(req, res) {
    const { cartItems }= req.query;
    let cartItemsArray = cartItems.split(',')
    ShoppingCart
      .findAndCountAll({
        where: {
          id: cartItemsArray
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

  /**
   * 
   */
  static removeItem(req, res) {
    let id;
    if (req.params.cartItemId) {
      id = req.params.cartItemId
    } else {
      id = req.body.items
    }
    ShoppingCart
    .destroy({
      where: {
        id
      }
    })
    .then(()=> {
      res.status(200)
      .json({
        message: 'item removed'
      })
    })
    .catch((err)=> {
      res.status(500)
      .json({
        message: 'Internal server error',
        error: err
      })
    })
  }
}


export default CartController;