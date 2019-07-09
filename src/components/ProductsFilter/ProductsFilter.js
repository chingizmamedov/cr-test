import React from 'react';

import Icon from '../Icon/Icon';
import './products-filter.scss';
import './assets/products-filter.svg';

function ProductsFilter() {
  return (
    <div className="products-filter">
      <Icon name="products-filter" className="products-filter__icon" />
    </div>
  )
}

export default ProductsFilter;