import React from 'react';

import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='navigation flex justify-sb'>
      <div className='navigation-logo'>
        Logo
      </div>

      <div className="navigation-menu flex">
        <NavLink
          className='navigation-menu__item'
          activeClassName='navigation-menu__item-active'
          to='/home'
        >
          Главная
        </NavLink>
        <NavLink
          className='navigation-menu__item'
          activeClassName='navigation-menu__item-active'
          to='/about-us'
        >
          О нас
        </NavLink>
        <NavLink
          className='navigation-menu__item'
          activeClassName='navigation-menu__item-active'
          to='/features'
        >
          Особенности
        </NavLink>
        <NavLink
          className='navigation-menu__item'
          activeClassName='navigation-menu__item-active'
          to='/test'
        >
          Тест
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;