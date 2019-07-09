import React from 'react';

import './product-box.scss';

function ProductBox() {
  return (
    <div className="product-box">
      <div className="product-box__holder">  
        <div className="product-box__image-wrap">
          <img src="" alt="" className="product-box__image" />
          <div className="product-box__sale">-20%</div>
        </div>
        <div className="product-box__title">Лестничный гусеничный подъемник для инвалидов Барс УГП-130</div>
        <div className="product-box__price">124 662 <span className="product-box__currency">руб.</span></div>
      </div>
    </div>
  )
}

export default ProductBox;
