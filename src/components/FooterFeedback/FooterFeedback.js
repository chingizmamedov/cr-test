import React from 'react';

import './footer-feedback.scss';

function FooterFeedback() {
  return (
    <div className="footer-feedback">
      <div className="footer-feedback__call footer-feedback__column">
        <a href="tel:+73433021022" className="footer-feedback__phone">+7 (343) 302-10-22</a>
        <div className="footer-feedback__order-call">Заказать звонок</div>
      </div>
      <div className="footer-feedback__mail footer-feedback__column">info@dostupsreda</div>
    </div>
  )
}

export default FooterFeedback;