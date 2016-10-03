import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { browserHistory } from 'react-router';
import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />, 
  // 	<Route path="/" component={App} />
  // 	<Route path="/other" component={Other} />
  // </Routes>,
  document.getElementById('root')
);
