import React from 'react';
import propTypes from 'prop-types';

const pagination = (props) => {
  const { pages,
    currentCategory,
    currentPage,
    getPaginatedShirts,
    getPaginatedCategoryShirts,
    getPaginatedSearchShirts } = props;


  let numberOfPages = pages;
  let paginationArray = [];
  let iterator = 1;
  while (numberOfPages > 0) {
    paginationArray.push(iterator);
    iterator += 1;
    numberOfPages -= 1;
  }

  let getPaginatedView;

  switch (currentCategory) {
    case 'all':
      getPaginatedView = getPaginatedShirts;
      break;
    case 'search':
      getPaginatedView = getPaginatedSearchShirts;
      break;
    default:
      getPaginatedView = getPaginatedCategoryShirts;
  }


  let paginationItems = paginationArray.map((item) => {
    return (<h3 className={`paginationItem ${(item === currentPage) ? 'currentPage' : ''}`} key={item} onClick={() => { getPaginatedView(item) }}>
      {item}
    </h3>)
  })

  return (
    <div className="paginationBody">
      <div className="paginationItems">
        {paginationItems}
      </div>
    </div>
  )
}

pagination.propTypes = {
  pages: propTypes.number.isRequired,
  getPaginatedShirts: propTypes.func.isRequired,
  getPaginatedCategoryShirts: propTypes.func.isRequired,
  getPaginatedSearchShirts: propTypes.func.isRequired,
  currentCategory: propTypes.string.isRequired,
  currentPage: propTypes.any
};

export default pagination;
