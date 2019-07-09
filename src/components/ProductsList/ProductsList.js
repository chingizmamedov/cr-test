import React from 'react';
import classNames from 'classnames';

import ProductBox from '../ProductBox/ProductBox';
import './products-list.scss';

function ProductsList(props) {
  const { title, className, showAllButton } = props;
  const classes = classNames('products-list', className);

  return (
    <div className={ classes }>
      <div className="products-list__top">
        <div className="products-list__subcategory-title">{ title }</div>
        {
          showAllButton && <div className="products-list__show-all">Показать все</div>
        }
      </div>
      <div className="products-list__items">
        <ProductBox key={ 1 }/>
        <ProductBox key={ 2 }/>
        <ProductBox key={ 3 }/>
        <ProductBox key={ 4 }/>
        <ProductBox key={ 5 }/>
        <ProductBox key={ 6 }/>
        <ProductBox key={ 7 }/>
        <ProductBox key={ 8 }/>
        <ProductBox key={ 9 }/>
      </div>
    </div>
  )
}

ProductsList.defaultProps = {
  className: '',
  showAllButton: true
};  

export default ProductsList;