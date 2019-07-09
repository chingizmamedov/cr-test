import React from 'react';

import CitySelect from '../CitySelect/CitySelect';
import Call from '../Call/Call';
import Login from '../Login/Login';
import OrderButton from '../OrderButton/OrderButton';
import NavList from '../NavList/NavList';

import './nav-top.scss';

function NavTop() {
  const menuItems = [
    {
      title: 'Компенсация ИРН'
    },
    {
      title: 'Сотрудничество'
    },
    {
      title: 'Сравнение (0)'
    }
  ];

  return (
    <div className="nav-top">
      <CitySelect />
      <Call />
      <NavList items={ menuItems }/>
      <Login />
      <OrderButton />
    </div>
  )
}

export default NavTop;