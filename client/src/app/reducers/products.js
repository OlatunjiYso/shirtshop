import {
  SET_DEPARTMENT, SET_DEPARTMENTS, SET_CATEGORY, SET_CATEGORIES, SET_SHIRTS, SET_CURRENT_SHIRT, SET_SEARCH_SHIRTS
} from '../actions/types';


const initialState = {
  currentDepartment: 'all',
  departments: [],
  categories: [],
  currentCategory: 'all',
  shirts: [],
  currentShirt: null,
  pages: 1,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEPARTMENT:
      return {
        ...state,
        currentDepartment: action.currentDepartment,
      };
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.departments,
      };
    case SET_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
        shirts: action.shirts,
        pages: action.pages
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case SET_SHIRTS:
      return {
        ...state,
        shirts: action.shirts,
        pages: action.pages,
        currentCategory: action.currentCategory,
      };
    case SET_CURRENT_SHIRT:
      return {
        ...state,
        currentShirt: action.chosenShirt
      };
    case SET_SEARCH_SHIRTS:
    return {
      ...state,
      shirts: action.shirts,
      currentCategory: action.currentCategory,
      pages: action.pages
    }

    default:
      return state;
  }
};

export default productReducer;