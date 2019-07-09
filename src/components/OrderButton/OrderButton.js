import React from 'react';

import Icon from '../Icon/Icon';
import './order-button.scss';
import './assets/order-button.svg';

function OrderButton() {
  return (
    <div className="order-button">
      <Icon className="order-button__icon" name="order-button" />
    </div>
  )
}

export default OrderButton;