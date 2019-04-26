import db from '../models/index';

const { Product, ProductCategory, Category } = db;

/**
 * categories controller to handle
 *    -- Getting all categories
 *    -- Getting the products in a particular category
 * 
 */
class CategoryController {
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
    filter.categoryId = req.query.category_id;
    ProductCategory
      .findAll({
        where: filter
      })
      .then((categoryProducts) => {
        if (categoryProducts.length == 0) {
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
          .findAndCountAll({
            where: {
              id: productIdArray
            }
          })
          .then((foundcategoryProducts) => {
            const limit = parseInt(req.query.limit) || 12;
            const { page } = req.query;
            const pages = Math.ceil(foundcategoryProducts.count / limit);
            let offset = (page > 1) ? limit * (page - 1) : 0;

            Product.findAll({
              where: {
                id: productIdArray
              },
              limit,
              offset
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
                      products: foundProducts,
                      pages
                    })
                })
            })

          })  
      })
      .catch((err) => {
        return res.status(500)
          .json({
            error: err.message
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
    let filter = (req.params.departmentId == 'all') ? {} : { departmentId: req.params.departmentId }
    return Category
      .findAll({
        where: filter
      })
      .then((categories) => {
        if (categories.length == 0) {
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
        return res.status(500)
          .json({
            error: err
          })
      });
  }
}

export default CategoryController;