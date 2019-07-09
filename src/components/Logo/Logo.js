import React from 'react';

import Icon from '../Icon/Icon';
import './assets/logo.svg';
import './logo.scss';

function Logo(props) {
  return (
    <div className="logo">
      <Icon name="logo" className="logo__image" />
    </div>
  );
}

export default Logo;