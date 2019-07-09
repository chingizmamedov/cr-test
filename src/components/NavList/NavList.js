import React from 'react';
import classNames from 'classnames';

import NavListItem from '../NavListItem/NavListItem';
import './nav-list.scss';

function NavList(props) {
  const { items, isMainNav, isToolsList } = props;
  const classes = classNames('nav-list', {
    'nav-list_main-nav': isMainNav,
    'nav-list_tools-list': isToolsList
  });
  const renderItems = () => {
    return items.map((item, key) => ( <NavListItem key={ key } item={ item } /> ));
  };

  return (
    <ul className={ classes }>
      { renderItems() }
    </ul>
  )
}

NavList.defaultProps = {
  items: [],
  isMainNav: false
};

export default NavList;