import React from 'react';
import Navigation from './Navigation';
import './Header.module.scss';

function Header() {
  return (
    <header>
      <span>Endorfin</span>
      <Navigation />
    </header>
  )
}

export default Header;
