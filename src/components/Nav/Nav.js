import React from 'react';
import { NavLink } from 'react-router-dom';
import design from './Nav.module.css';

const Nav = () => {
  return (
    <div className={design.mainNav}>
      <ul>
        <li>
          <NavLink
            exact
            activeClassName={design.active}
            to="/"
            className={design.txt_link}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={design.active}
            to="/pets"
            className={design.txt_link}
          >
            Pets
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={design.active}
            to="/about"
            className={design.txt_link}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
