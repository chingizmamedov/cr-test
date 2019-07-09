import React from 'react';

import Icon from '../Icon/Icon';

import './footer-subscribe.scss';
import './asssets/send-subscribe.svg';

function FooterSubscribe() {
  return (
    <div className="footer-subscribe">
      <form className="footer-subscribe__form">
        <label className="footer-subscribe__field-wrap">
          <input type="text" placeholder="Ваш e-mail" className="footer-subscribe__field" />
          <button type="submit" className="footer-subscribe__submit">
            <Icon name="send-subscribe" className="footer-subscribe__submit-icon" />
          </button>
        </label>
      </form>
    </div>
  )
}

export default FooterSubscribe;