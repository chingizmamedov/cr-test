import React from 'react';

import CategoryList from '~/components/CategoryList/CategoryList';
import CategoriesSidebar from '~/components/CategoriesSidebar/CategoriesSidebar';
import './categories.scss';

function Categories() {
  return (
    <div className="categories">
      <CategoriesSidebar />
      <CategoryList />
    </div>
  )
}

export default Categories;