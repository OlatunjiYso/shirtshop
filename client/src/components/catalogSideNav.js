import React from 'react';
import propTypes from 'prop-types';

const catSideNav = () => {
  return (
    <div className="catSideNavBody">
      <div className="departmentpics">
        <h1> 🌆</h1>
      </div>
      <select id="departmentSelect">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <ul className="categoryItems">
        <li className="categoryItem" > category 1</li>
        <li className="categoryItem" > category 2</li>
        <li className="categoryItem" > category 3</li>
        <li className="categoryItem" > category 4</li>
      </ul>

    </div>
  )
}

catSideNav.propTypes = {
  name: propTypes.string,
};

export default catSideNav;