import React from 'react';
import Title from './Title';

const Navbar = ({ title, user }) => (
  <header className="main-header">
    <Title title={title} />
    <p className="main-header__user">{user}</p>
  </header>
);

export default Navbar;
