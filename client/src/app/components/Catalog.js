import React from 'react';
import propTypes from 'prop-types';

import SideNav from './CatalogSideNav';
import ShirtCard from './ShirtCard';


const catalog = (props) => {
  let { categories,
    departments,
    shirts,
    currentDepartment,
    changeDepartment,
    currentCategory,
    changeCategory,
    fetchAllProducts,
    searchShirts,
    shirtsComingFromSearch } = props;

  let shirtCards = shirts.map((shirt) => {
    let { id, name, image, price } = shirt
    return (
      <ShirtCard
        key={id}
        id={id}
        name={name}
        imageUrl={image}
        price={price}
      />
    )
  })

  const shirtsToBeDisplayed = (shirtCards.length > 0) ? shirtCards : <h3> No shirt found</h3>

  const catalogHeader = (!shirtsComingFromSearch) ?
    <p className="catalogCardHeader"> {currentCategory} T-shirts for you!</p> : <p className="catalogCardHeader"> Search results</p>
  return (
    <div className="catalogBody">
      <div className="catalogSearch">
        <SideNav
          categories={categories}
          departments={departments}
          changeDepartment={changeDepartment}
          currentDepartment={currentDepartment}
          changeCategory={changeCategory}
          fetchAllProducts= {fetchAllProducts}
          searchShirts={searchShirts}
          
        />
      </div>
      <div className="catalogCardsSection">
      { catalogHeader }
        <div className="catalogCards">
       { shirtsToBeDisplayed }
        </div>
      </div>
    </div>
  )
}

catalog.propTypes = {
  categories: propTypes.array.isRequired,
  departments: propTypes.array.isRequired,
  shirts: propTypes.array.isRequired,
  changeDepartment: propTypes.func.isRequired,
  currentDepartment: propTypes.string.isRequired,
  currentCategory: propTypes.string.isRequired,
  changeCategory: propTypes.func.isRequired,
  fetchAllProducts: propTypes.func.isRequired,
  searchShirts: propTypes.func.isRequired,
  shirtsComingFromSearch: propTypes.bool,
};

export default catalog;