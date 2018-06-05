import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import {Detail} from './detail/detail';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/detail" component={Detail}/>
  </Router>,
  document.getElementById('root')
);
