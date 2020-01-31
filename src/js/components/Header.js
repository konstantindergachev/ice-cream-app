import PropTypes from 'prop-types';
import React from 'react';
import icecream from '../../img/icecream.svg';

const Header = ({ tagline }) => (
  <header className="header">
    <h1 className="header__logo">
      <img
        className="header__img"
        src={`../../${icecream}`}
        alt="icecream logo"
      />
      <span className="header__title">Сладкий морозко</span>
      <span className="header__text">{tagline}</span>
    </h1>
    <h3 className="tagline" />
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};
export default Header;
