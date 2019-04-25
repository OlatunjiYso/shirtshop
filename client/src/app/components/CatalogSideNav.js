import React from 'react';
import propTypes from 'prop-types';

const catSideNav = (props) => {
  let { departments,
    categories,
    changeDepartment,
    currentDepartment,
    changeCategory,
    searchShirts,
    fetchAllProducts
  } = props

  const departmentOptions = departments.map((department) => {
    return (
      <option
        key={department.id} value={department.id} >
        {department.name}
      </option>
    )
  });
  const categoryListItems = categories.map((category) => {
    return (
      <li className="categoryItem" key={category.id} value={category.id} onClick={changeCategory}>
        {category.name}
      </li>
    )
  })
  let departmentImage = (currentDepartment === '1') ? ' 🏁' : (currentDepartment === '2') ? '🌴' : '🌤'
  return (
    <div className="catSideNavBody">
      <div className="departmentpics">
        <h3 id="departmentImage">{departmentImage}</h3>
      </div>
      <input type="text" id="productSearchBox" placeholder="search product" onChange={searchShirts}/>
      <div className="productFilters">
        <select id="departmentSelect" value={currentDepartment} onChange={changeDepartment}>
          {departmentOptions}
          <option value={'all'} >{'All Departments'}</option>
        </select>
        <ul className="categoryItems">
          {categoryListItems}
          <li className="categoryItem" onClick={fetchAllProducts}> All Shirts </li>
        </ul>
      </div>
    </div>
  )
}

catSideNav.propTypes = {
  departments: propTypes.array,
  categories: propTypes.array,
  changeDepartment: propTypes.func.isRequired,
  currentDepartment: propTypes.string.isRequired,
  changeCategory: propTypes.func.isRequired,
  fetchAllProducts: propTypes.func.isRequired,
  searchShirts: propTypes.func.isRequired,
};

export default catSideNav;