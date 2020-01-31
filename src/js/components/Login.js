import PropTypes from 'prop-types';
import React from 'react';

const Login = ({ authenticate }) => (
  <nav className="login">
    <h2>Вход</h2>
    <p>Войдите в систему, чтобы управлять записями своего магазина.</p>
    <button className="github" onClick={() => authenticate('Github')}>
      Войти через Github
    </button>
    <button className="facebook" onClick={() => authenticate('Facebook')}>
      Войти через Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
