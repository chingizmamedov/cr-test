import React from 'react';

import Icon from '../Icon/Icon';
import './city-select.scss';
import './assets/city-position.svg';

function CitySelect() {
  return (
    <div className="city-select">
      <Icon className="city-select__icon" name="city-position" />
      <div className="city-select__current">Екатеринбург</div>
    </div>
  )
}

export default CitySelect;