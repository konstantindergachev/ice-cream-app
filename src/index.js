import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './js/components/App';
import ErrorHandler from './js/components/ErrorHandler';
import StorePicker from './js/components/StorePicker';
import './main.scss';

const app = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={ErrorHandler} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
