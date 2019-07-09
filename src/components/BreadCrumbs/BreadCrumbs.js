import React from 'react';

import Icon from '../Icon/Icon';
import './breadcrumbs.scss';
import './assets/arrow-breadcrumbs.svg'

function BreadCrumbs() {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__item">Главная</div>
      <Icon name="arrow-breadcrumbs" className="breadcrumbs__icon" />
      <div className="breadcrumbs__item">Каталог</div>
      <Icon name="arrow-breadcrumbs" className="breadcrumbs__icon" />      
      <div className="breadcrumbs__item breadcrumbs__item_current">Доступная среда</div>
    </div>
  )
}

export default BreadCrumbs;