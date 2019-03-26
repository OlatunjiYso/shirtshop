import db from '../models/index';

const { Product } = db;

/**
 * Products controller to handle
 *    -- Getting all businesses
 *    -- Getting a particular business
 * 
 */
class ProductsController {

  /**
   * @description Fetches all businesses
   * 
   * @param { object } req -request object
   * @param { object } res -response object
   * 
   * @return { json }  message
   */
  static getAllProducts(req, res) {
    Product
      .findAll({
        limit: 50,
      })
      .then((products) => {
        if (products) {
          return res.status(200)
            .json({
              message: 'products found!',
              products,
            })
        }
      })
      .catch((err) => {
        res.status(500)
          .json({
            error: err
          })
      });
  }
}




export default ProductsController;