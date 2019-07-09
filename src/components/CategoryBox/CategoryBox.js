import React from 'react';

import './category-box.scss';

function CategoryBox(props) {
  const { data } = props;
  const { src, title, count } = data;
  return (
    <div className="category-box">
      <div className="category-box__holder">
        <div className="category-box__image-holder">
          <img src={ src } alt="" className="category-box__image" />
        </div>
        <div className="category-box__title">{ title }</div>
        <div className="category-box__goods">{ count } товаров</div>
      </div>
    </div>
  )
}

CategoryBox.defaultProps = {
  data: {}
}

export default CategoryBox;