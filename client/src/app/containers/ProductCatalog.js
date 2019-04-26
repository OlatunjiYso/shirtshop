import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


import { fetchAllShirts, fetchCategories, setDepartment, searchShirts } from '../actions/product';
import { fetchProductsInCategory, fetchDepartments } from '../actions/product';
import Catalog from '../components/Catalog';
import Pagination from '../components/Pagination';


/**
 * @class ProductCatalog
 * 
 * @extends React.Component
 */
class ProductCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      searchKeyword: '',
      currentCategoryId: 1
    }
    this.changeDepartment = this.changeDepartment.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.searchShirts = this.searchShirts.bind(this);
    this.getPaginatedShirts = this.getPaginatedShirts.bind(this);
    this.getPaginatedCategoryShirts = this.getPaginatedCategoryShirts.bind(this);
    this.getPaginatedSearchShirts = this.getPaginatedSearchShirts.bind(this);
  }
 /**
   * @description - runs after page loads
   */
  componentDidMount() {
    const pageNumber = this.state.currentPage
    this.props.fetchAllShirts(pageNumber);
    this.props.fetchDepartments();
    this.props.fetchCategories('all');
  }
  /**
   * @description handles change department
   *
   * @param {obj} event - event object
   *
   * @memberof ProductCatalog Component
   * @returns {func} funtion
   */
  changeDepartment(event) {
    const { value } = event.target;
    this.props.setDepartment(value)
    this.props.fetchCategories(value);
  }

  /**
   * @description handles change category
   *
   * @param {obj} event - event object
   *
   * @memberof ProductCatalog Component
   * @returns {func} funtion
   */
  changeCategory(event) {
   const categoryId = event.target.value;
   this.setState({
    ...this.state,
    currentCategoryId: categoryId,
    currentPage: 1
  })
   this.props.fetchProductsInCategory(categoryId);
  }

  /**
   * @description - fetches a paginated view of all shirts
   */
  getPaginatedShirts(pageNumber) {
    this.setState({
      ...this.state, currentPage: pageNumber
    })
    this.props.fetchAllShirts(pageNumber);
  } 

  /**
   * @description - fetches a paginated view of category shirts
   */
  getPaginatedCategoryShirts(pageNumber) {
    const categoryId = this.state.currentCategoryId;
    this.setState({
      ...this.state, currentPage: pageNumber
    })
    this.props.fetchProductsInCategory(categoryId, pageNumber);
  } 

  /**
   * @description - fetches a paginated view of search shirts
   */
  getPaginatedSearchShirts(pageNumber) {
    const searchKeyword = this.state.searchKeyword;
    this.setState({
      ...this.state, currentPage: pageNumber
    })
    this.props.searchShirts(searchKeyword, pageNumber);
  } 

  /**
   * @description - search for shirt by keyword
   */
  searchShirts(event) {
    const searchWord = event.target.value;
    this.setState({
      ...this.state,
       searchKeyword: searchWord,
       currentPage: 1
    })
    this.props.searchShirts(searchWord);
  } 

  render() {
   let  { categories, departments, shirts, currentDepartment, currentCategory, pages } = this.props.productData;
   const fetchAllProducts = this.props.fetchAllShirts
    return (
      <div>
        <Catalog 
        categories={categories}
        departments={departments}
        shirts={shirts}
        currentDepartment={currentDepartment}
        changeDepartment={this.changeDepartment}
        changeCategory={this.changeCategory}
        currentCategory={currentCategory}
        fetchAllProducts ={fetchAllProducts}
        searchShirts = {this.searchShirts}
        />
        <Pagination
         pages= {pages}
         getPaginatedShirts={this.getPaginatedShirts}
         getPaginatedCategoryShirts={this.getPaginatedCategoryShirts}
         getPaginatedSearchShirts={this.getPaginatedSearchShirts}
         currentCategory={currentCategory}
         currentPage= {this.state.currentPage}
         />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const productData = state.products;
  return {
    productData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchAllShirts,
      fetchCategories,
      fetchProductsInCategory,
      fetchDepartments,
      setDepartment,
      searchShirts
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCatalog);

ProductCatalog.propTypes = {
  fetchAllShirts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchDepartments: PropTypes.func.isRequired,
  setDepartment:PropTypes.func.isRequired,
  fetchProductsInCategory: PropTypes.func.isRequired,
  productData: PropTypes.object
};