import db from '../models/index';
import order_detail from '../models/order_detail';

const { Product, ProductCategory, Category, ProductAttribute, Review, AttributeValue, Attribute, OrderDetail } = db;

/**
 * Products controller to handle
 *    -- Getting all products
 *    -- Getting a particular product
 * 
 */
class ProductsController {

  /**
     * @description Fetches a particular product
     * 
     * @param { object } req -request object
     * @param { object } res -response object
     * 
     * @return { json }  message
     */
  static getProduct(req, res) {
    let productId = req.params.id;
    let attributes = [];
    let reviews = [];
    let foundProduct = [];
    let categoryName = '';
    Product
      .findOne({
        where: {
          id: productId
        },
      })
      .then((product) => {
        if(!product) {
          return res.status(404)
          .json({
            message: 'no such products found!'
          })
        }
        foundProduct = product;
        ProductAttribute
          .findAll({
            where: {
              productId
            }
          })
          .then((prodAttributes) => {
            prodAttributes.map((eachAttribute) => {
              let presentAttribute = {};
              let key = '';
              let value = '';
              let { attributeValueId } = eachAttribute;
              AttributeValue
                .findOne({
                  where: {
                    id: attributeValueId
                  }
                })
                .then((attributeValue) => {
                  value = attributeValue.value;
                  let { attributeId } = attributeValue;
                  Attribute
                    .findOne({
                      where: {
                        id: attributeId
                      }
                    })
                    .then((attribute) => {
                      key = attribute.name;
                      presentAttribute[key] = value
                      attributes.push(presentAttribute)
                    })
                })
            })
          })
          .then(() => {
            Review
              .findAll({
                where: {
                  id: productId
                }
              })
              .then((allReviews) => {
                reviews = allReviews;
                ProductCategory
                  .findOne({
                    where: {
                      productId
                    }
                  })
                  .then((productcategory) => {
                    let categoryIndex = productcategory.categoryId;
                    Category
                      .findOne({
                        where: {
                          id: categoryIndex
                        }
                      })
                      .then((category) => {
                        categoryName = category.name
                        OrderDetail
                          .findAndCountAll({
                            where: {
                              productId
                            }
                          })
                          .then((orders) => {
                            let totalOrders = orders.count;
                            let entireProduct = Object.assign(
                              { foundProduct },
                              { reviews },
                              { attributes },
                              { categoryName },
                              { totalOrders }
                            );
                            res.status(200)
                              .json({
                                message: 'productFound',
                                entireProduct
                              })
                          })
                      })
                  })
              })
          })
      })
      .catch((err) => {
        res.status(500)
          .json({
            error: err
          })
      });
  }


  /**
   * @description Fetches all products
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
        res.status(500)
          .json({
            error: err
          })
      });
  }
}

export default ProductsController;