import React from 'react';
import propTypes from 'prop-types';

const catSideNav = (props) => {
  let { departments,
    categories,
    changeDepartment,
    currentDepartment,
    changeCategory
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
      <li className="categoryItem" key={category.id} value={category.id}  >
        {category.name}
      </li>
    )
  })
  return (
    <div className="catSideNavBody">
      <div className="departmentpics">
        <h1> 🌆</h1>
      </div>
      <select id="departmentSelect" value={currentDepartment} onChange={changeDepartment}>
        <option value="department" >Department</option>
        {departmentOptions}
      </select>
      <ul className="categoryItems" onClick={changeCategory}>
        {categoryListItems}
      </ul>
    </div>
  )
}

catSideNav.propTypes = {
  departments: propTypes.array,
  categories: propTypes.array,
  changeDepartment: propTypes.func.isRequired,
  currentDepartment: propTypes.string.isRequired,
  changeCategory: propTypes.func.isRequired,
  fetchAllProducts: propTypes.func.isRequired
};

export default catSideNav;