import {
  SET_DEPARTMENT, SET_DEPARTMENTS, SET_CATEGORY, SET_CATEGORIES, SET_SHIRTS, SET_CURRENT_SHIRT,
} from '../actions/types';


const initialState = {
  currentDepartment: 'id',
  departments: [],
  categories: [],
  currentCategory: 'All',
  shirts: [],
  currentShirt: {},
  pages: 8
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
        shirts: action.shirts
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
        pages: action.pages
      };
    case SET_CURRENT_SHIRT:
      return {
        ...state,
        currentShirt: action.chosenShirt
      };

    default:
      return state;
  }
};

export default productReducer;