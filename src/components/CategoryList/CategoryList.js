import React from 'react';

import CategoryBox from '../CategoryBox/CategoryBox';
import './category-list.scss';

function CategoryList() {
  const testItems = [
    {
      title: 'Автоматическое открывание дверей',
      count: 4
    },
    {
      title: 'Система ориентирования и информирования',
      count: 14
    },
    {
      title: 'Автоматическое открывание дверей',
      count: 4
    },
    {
      title: 'Система ориентирования и информирования',
      count: 14
    },
    {
      title: 'Система ориентирования и информирования',
      count: 14
    },
  ]
  return (
    <div className="category-list">
      { renderBoxes(testItems) }
    </div>
  )
}

function renderBoxes(items) {
  return items.map((item, key) => ( <CategoryBox data={ item } key={ key } /> ));
}

export default CategoryList;