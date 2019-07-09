import React from 'react';

import FooterFeedback from '../FooterFeedback/FooterFeedback';
import FooterSubscribe from '../FooterSubscribe/FooterSubscribe';
import Social from '../Social/Social';

import './footer-info.scss';

function FooterInfo() {
  return (
    <div className="footer-info">
      <div className="footer-info__column">
        <div className="footer-info__title">Остались вопросы? Свяжитесь с нами</div>
        <FooterFeedback />
      </div>
      <div className="footer-info__column">
        <div className="footer-info__title">Подпишитесь на новости</div>
        <div className="footer-info__row">
          <FooterSubscribe />
          <Social />
        </div>
      </div>
    </div>
  )
}

export default FooterInfo;