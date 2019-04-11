import db from '../models/index';

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

}

export default ProductsController;