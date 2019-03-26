import db from '../models/index';

const { Product, ProductCategory, Category } = db;

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


  /**
   * @description Fetches products by category
   * 
   * @param { object } req -request object
   * @param { object } res -response object
   * 
   * @return { json }  message
   */
  static getCategoryProducts(req, res) {
    const filter = {};
    let foundProducts = [];
    if (req.query.category_id) {
      filter.categoryId = req.query.category_id;
    }
    ProductCategory
      .findAll({
        where: filter
      })
      .then((categoryProducts) => {
        if(categoryProducts.length == 0) {
          return res.status(404)
          .json({
            message: 'no such category exist'
          })
        }
        let productIdArray = [];
        categoryProducts.map((categoryProduct) => {
          productIdArray.push(categoryProduct.productId)
        });
        Product
          .findAll({
            where: {
              id: productIdArray
            }
          })
          .then((products) => {
            foundProducts = products;
          })
          .then(() => {
            Category
              .findOne({
                where: {
                  id: req.query.category_id
                }
              })
              .then((category) => {
                res.status(200)
                  .json({
                    message: 'products found!',
                    category: category.name,
                    products: foundProducts
                  })
              })
          })
          .catch((err) => {
            res.status(500)
            .json({
              error: err.message
            })
          })
      })
  }


  /**
   * @description Fetches all categories in a department
   * 
   * @param { object } req -request object
   * @param { object } res -response object
   * 
   * @return { json }  message
   */
  static getCategories(req, res) {
    Category
      .findAll({
      where: {
        departmentId: req.query.department_id
      }
      })
      .then((categories) => {
        if(categories.length == 0) {
          return res.status(404)
          .json({
            message: 'no such department exist'
          })
        }
          return res.status(200)
            .json({
              message: 'categories found!',
              categories,
            })
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