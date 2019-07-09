import React from 'react';

import ProductsList from '~/components/ProductsList/ProductsList';
import ProductCard from '~/components/ProductCard/ProductCard';
import BreadCrumbs from '~/components/BreadCrumbs/BreadCrumbs';
import './product.scss';

function Product() {
  return (
    <div className="product container">
      <BreadCrumbs />
      <div className="product__card-holder">
        <ProductCard />
      </div>
      <ProductsList title="В комплекте с товаром покупают" showAllButton={ false } />
    </div>
  )
}

export default Product;