import React, { Fragment } from 'react';
import notFound from '../../img/stomach_404.gif';
import BackButton from './BackButton';

const ErrorHandler = ({ history }) => {
  return (
    <Fragment>
      <div className="error__page">
        <BackButton history={history} />
        <img className="error__page-img" src={notFound} alt="My ice-cream" />
        <h3 className="error__page-title">Страница не найдена</h3>
      </div>
    </Fragment>
  );
};
export default ErrorHandler;
