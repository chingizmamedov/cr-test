import React from 'react';

import CategoryItem from '../CategoryItem/CategoryItem';
import './categories-sidebar.scss';

function CategoriesSidebar() {
  const categories = [
    {
      title: 'Доступная среда'
    },
    {
      title: 'Реабилитация и абилитация'
    },
    {
      title: 'Нарушение зрения'
    },
    {
      title: 'Нарушение слуха'
    },
    {
      title: 'Нарушения опорно-двигательного апппарата'
    },
    {
      title: 'Детская восстановительная медицина и реабилитация'
    }
  ];

  return (
    <div className="categories-sidebar">
      { renderCategories(categories) }
    </div>
  )
}

function renderCategories(categories) {
  return categories.map((category, key) => {
    return <CategoryItem key={ key } data={ category } />
  });
}

export default CategoriesSidebar;