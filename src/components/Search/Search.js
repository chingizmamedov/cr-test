import React from 'react';

import Icon from '../Icon/Icon';
import './search.scss';
import './assets/search.svg';

function Search() {
  return (
    <div className="search">
      <Icon className="search__icon" name="search" />
    </div>
  )
}

export default Search;