import React from 'react';

import BreadCrumbs from '~/components/BreadCrumbs/BreadCrumbs';
import PageTop from '~/components/PageTop/PageTop';
import PageTitle from '~/components/PageTitle/PageTitle';
import ProductsList from '~/components/ProductsList/ProductsList';
import ProductsFilter from '~/components/ProductsFilter/ProductsFilter';

import './products.scss';

function Products() {
  return (
    <div className="products container">
      <BreadCrumbs />
      <PageTop>
        <PageTitle title="Лестничные подъемники для людей передвигающихся на кресле-коляске" 
                   type="h2" />
        <ProductsFilter />
      </PageTop>
      <ProductsList title="Выбор покупателей" />
    </div>
  )
}

export default Products;