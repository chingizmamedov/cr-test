import React from 'react';

import './nav-list-item.scss';

function NavListItem(props) {
  const { item } = props;
  const { title } = item;

  return (
    <li className="nav-list-item">
      <div className="nav-list-item__link">{ title }</div>
    </li>
  )
}

export default NavListItem;