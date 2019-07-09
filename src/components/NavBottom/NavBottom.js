import React from 'react';

import NavList from '../NavList/NavList';
import MenuIcon from '../MenuIcon/MenuIcon';
import Search from '../Search/Search';

import './nav-bottom.scss';

function NavBottom() {
  const menuMainItems = [
    {
      title: 'каталог'
    },
    {
      title: 'акции'
    },
    {
      title: 'услуги'
    },
    {
      title: 'сервис'
    },
    {
      title: 'наши работы'
    }
  ];
  const toolsItems = [
    {
      title: 'Список ТЗ (0)'
    },
    {
      title: 'Расчет конструкции'
    }
  ];

  return (
    <div className="nav-bottom">
      <MenuIcon />
      <div className="nav-bottom__holder">
        <NavList items={ menuMainItems } isMainNav={ true } />
        <div className="nav-bottom__right">
          <NavList items={ toolsItems } isToolsList={ true } />
          <Search />
        </div>
      </div>
    </div>
  )
}

export default NavBottom;