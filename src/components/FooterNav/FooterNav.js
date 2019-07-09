import React from 'react';

import FooterNavColumn from '../FooterNavColumn/FooterNavColumn';
import footerNav from '~/services/footer-nav';
import './footer-nav.scss';

function FooterNav() {
  return (
    <div className="footer-nav">
      { renderMenu(footerNav) }
    </div>
  )
}

function renderMenu(items) {
  return items.map((item, key) => (
    <div className="footer-nav__list" key={ key }>
      <FooterNavColumn data={ item } />
    </div>
  ));
}

export default FooterNav;