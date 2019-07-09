import React from 'react';

import Icon from '../Icon/Icon';
import social from '~/services/social';

import './social.scss';
import './assets/instagram.svg';
import './assets/fb.svg';
import './assets/vk.svg';

function Social() {
  return (
    <div className="social">
      { renderSocial(social) }
    </div>
  )
}

function renderSocial(socialData) {
  return socialData.map(({ name, href }, key) => (
    <a href={ href } className="social__item" key={ key }>
      <Icon name={ name } className="social__icon" />
    </a>
  )); 
}

export default Social;