import React from 'react';

import FooterNav from '../FooterNav/FooterNav';
import FooterInfo from '../FooterInfo/FooterInfo';

import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__holder container">
        <FooterNav />
      </div>
      <div className="footer__line" />
      <div className="container">
        <FooterInfo />
      </div>
      <div className="footer__public-offer">
        <div className="container">
          Не является публичной офертой. Внимание! Изображения товаров, представленные на сайте, могут отличаться от фактического вида товаров. <br />
          Цены указанные на сайте действительно при самовывозе со склада компании в Екатеринбурге.
        </div>
      </div>
    </footer>
  )
}

export default Footer;