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
    }
    this.changeDepartment = this.changeDepartment.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.getPaginatedView = this.getPaginatedView.bind(this);
    this.searchShirts = this.searchShirts.bind(this);
  }
 /**
   * @description - runs after page loads
   */
  componentDidMount() {
    const pageNumber = this.state.currentPage
    this.props.fetchAllShirts(pageNumber);
    this.props.fetchDepartments();
    this.props.fetchCategories(1);
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
   const { value } = event.target;
   this.props.fetchProductsInCategory(value);
  }

  /**
   * @description - fetches a paginated view
   */
  getPaginatedView(pageNumber) {
    this.props.fetchAllShirts(pageNumber);
    this.setState({
      ...this.state, currentPage: pageNumber
    })
  } 

  /**
   * @description - search for shirt by keyword
   */
  searchShirts(event) {
    const { value } = event.target;
    this.props.searchShirts(value);
  } 

  render() {
   let  { categories, departments, shirts, currentDepartment, currentCategory, pages, shirtsComingFromSearch } = this.props.productData;
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
        shirtsComingFromSearch= {shirtsComingFromSearch}
        />
        <Pagination
         pages= {pages}
         getPaginatedView={this.getPaginatedView}
         currentCategory={currentCategory}
         currentPage= {this.state.currentPage}
         shirtsComingFromSearch= {shirtsComingFromSearch}

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