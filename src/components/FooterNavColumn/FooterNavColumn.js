import React from 'react';

import './footer-nav-column.scss';

function FooterNavColumn(props) {
  const { data } = props;
  const { title, items } = data;

  return (
    <div className="footer-nav-column">
      <div className="footer-nav-column__title">{ title }</div>
      <div className="footer-nav-column__list">
        { renderItems(items) }
      </div>
    </div>
  )
}

const renderItems = (navItems) => {
  return navItems.map((navItem, key) => {
    const { title } = navItem;
    return (
      <div className="footer-nav-column__item" key={ key }>{ title }</div>
    )
  });
}

export default FooterNavColumn;