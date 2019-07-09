import React from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <Logo />    
      <div className="header__holder container">
        <Nav />
      </div>
    </header>
  )
};

export default Header;