import React from 'react';

import BreadCrumbs from '~/components/BreadCrumbs/BreadCrumbs';
import PageTitle from '~/components/PageTitle/PageTitle';
import PageTop from '~/components/PageTop/PageTop';
import Categories from '~/components/Categories/Categories';

import './catalog.scss';

function Catalog() {
  return (
    <div className="container catalog">
      <BreadCrumbs />
      <PageTop>
        <PageTitle title="Доступная среда" />
      </PageTop>
      <Categories />
    </div>
  )
}

export default Catalog;