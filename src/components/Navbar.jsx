import React from 'react';
import Title from './Title';

const Navbar = ({ title, user }) => (
  <header className="header">
    <Title title={title} />
    <p className="header__user">{user}</p>
  </header>
);

export default Navbar;
