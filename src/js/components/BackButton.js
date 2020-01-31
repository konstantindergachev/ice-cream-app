import React from 'react';

const BackButton = ({ history }) => (
  <span className="back__btn" onClick={() => history.push('/')}>
    На главную
  </span>
);

export default BackButton;
