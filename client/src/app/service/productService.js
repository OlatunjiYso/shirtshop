import axios from 'axios';
const rootUrl = '/api/v1';


class ProductService {

 /**
 * @description fetches all shirts from db.
 */
  static fetchAllProducts(pageNumber) {
    const url = `${rootUrl}/products/?page=${pageNumber}`;
    return axios.get(url);
  }

 /**
 * @description fetches a particular shirt from db.
 * @param {Integer} productId - product id
 */
static fetchSpecifiedProduct(productId) {
  const url = `${rootUrl}/products/${productId}`;
  return axios.get(url);
}

/**
 * @description fetches all shirts in a category
 * @param {Integer} categoryId
 */
static fetchProductsInCategory(categoryId) {
  const url = `${rootUrl}/categories/products/?category_id=${categoryId}`;
  return axios.get(url);
}

/**
 * @description fetches all categories in department
 * @param {Integer} departmentId - departmentId
 */
static fetchCategories(departmentId) {
  const url = `${rootUrl}/categories/${departmentId}`;
  return axios.get(url);
}

/**
 * @description fetches all categories in department
 * @param {Integer} departmentId - departmentId
 */
static fetchDepartment() {
  const url = `${rootUrl}/departments`;
  return axios.get(url);
}


}

export default ProductService;