import productService from '../service/productService';

import {
  SET_DEPARTMENT, SET_DEPARTMENTS, SET_CATEGORY, SET_CATEGORIES, SET_SHIRTS, SET_CURRENT_SHIRT, SET_SEARCH_SHIRTS
} from './types';

export const setDepartment = chosenDepartment => ({
  type: SET_DEPARTMENT,
  currentDepartment: chosenDepartment
});

export const setDepartments = foundDepartments => ({
  type: SET_DEPARTMENTS,
  departments: foundDepartments
});

export const setCategory = (chosenCategory, foundShirts, pages) => ({
  type: SET_CATEGORY,
  currentCategory: chosenCategory,
  shirts: foundShirts,
  pages
});

export const setCategories = foundCategories => ({
  type: SET_CATEGORIES,
  categories: foundCategories
});

export const setShirts = (foundShirts, pages) => ({
  type: SET_SHIRTS,
  shirts: foundShirts,
  currentCategory: 'all',
  pages
});

export const setSearchShirts = (foundShirts, pages) => ({
  type: SET_SEARCH_SHIRTS,
  shirts: foundShirts,
  currentCategory: 'search',
  pages
});

export const setCurrentShirt = chosenShirt => ({
  type: SET_CURRENT_SHIRT,
  chosenShirt
});

/**
 * @description - fetches all shirts from database an update state.
 */
export const fetchShirt = (productId) => (dispatch) => {
  return productService.fetchSpecifiedProduct(productId)
    .then((response) => {
      const shirt = response.data.entireProduct;
      dispatch(setCurrentShirt(shirt));
    })
    .catch(() => {
      return null
    });
};

/**
 * @description - fetches a shirt from database and update state.
 */
export const fetchAllShirts = (pageNumber) => (dispatch) => {
  return productService.fetchAllProducts(pageNumber)
    .then((response) => {
      const shirts = response.data.products;
      const { pages } = response.data;
      dispatch(setShirts(shirts, pages));
    })
    .catch(() => {
      return null
    });
};

/**
 * @description - fetches a shirt from database and update state.
 */
export const searchShirts = (keyword, pageNumber) => (dispatch) => {
  return productService.searchProduct(keyword, pageNumber)
    .then((response) => {
      const shirts = response.data.foundProducts;
      const { pages } = response.data;
      dispatch(setSearchShirts(shirts, pages));
    })
    .catch(() => {
      return null
    });
};

/**
 * @description - fetches all categories in  a department.
 */
export const fetchCategories = (departmentId) => (dispatch) => {
  return productService.fetchCategories(departmentId)
    .then((response) => {
      const foundCategories = response.data.categories;
      dispatch(setCategories(foundCategories));
    })
    .catch(() => {
      return null
    });
};

/**
 * @description - fetches all businesses in a category.
 */
export const fetchProductsInCategory = (categoryId, pageNumber) => (dispatch) => {
  return productService.fetchProductsInCategory(categoryId, pageNumber)
    .then((response) => {
      const { category, products, pages } = response.data;
      dispatch(setCategory(category, products, pages));
    })
    .catch(() => {
      return null
    });
};

/**
 * @description - fetches all departments.
 */
export const fetchDepartments = () => (dispatch) => {
  return productService.fetchDepartment()
    .then((response) => {
      const { departments } = response.data;
      dispatch(setDepartments(departments));
    })
    .catch(() => {
      return null
    });
};