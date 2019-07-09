import React from 'react';

import './category-item.scss';

function CategoryItem(props) {
  const { data } = props;
  const { title } = data;

  return (
    <div className="category-item">
      <div className="category-item__icon"></div>
      <div className="category-item__title">{ title }</div>
    </div>
  )
}

export default CategoryItem;