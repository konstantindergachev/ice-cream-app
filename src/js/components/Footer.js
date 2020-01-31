import React from 'react';

const Footer = () => (
  <footer className="footer">
    <span className="footer__left">
      &copy; {new Date().toISOString().split('-')[0]}
    </span>
    <span className="footer__right">Константин Дергачёв</span>
  </footer>
);

export default Footer;
