import React from 'react';
import propTypes from 'prop-types';

const pagination = (props) => {
  const { pages, getPaginatedView, currentCategory, currentPage } = props;
  let numberOfPages = pages;
  let paginationArray = [];
  let iterator = 1;
  while (numberOfPages >  0) {
    paginationArray.push(iterator);
    iterator += 1;
    numberOfPages -=1;
  }
  let paginationItems = paginationArray.map((item) => {
    return( <h3 className={`paginationItem ${(item === currentPage)? 'currentPage': ''}`} key={item} onClick={()=> {getPaginatedView(item)}}> 
      {item} 
      </h3>)
  })

  const paginationBlock = (currentCategory === 'All') ? paginationItems : null
  return (
    <div className="paginationBody">
      <div className="paginationItems">
      {paginationBlock}
      </div>
    </div>
  )
}

pagination.propTypes = {
  pages: propTypes.number.isRequired,
  getPaginatedView: propTypes.func.isRequired,
  currentCategory: propTypes.string.isRequired,
  currentPage: propTypes.any
};

export default pagination;