// src/routes.js
import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import AppLayout from './layouts/AppLayout';
import MovieSearch from './components/MovieSearch';
import Other from './components/Other';

const Routes = (props) => (
  <Router {...props}>
  	<Route path="/" component={AppLayout}>
	    <IndexRoute path="/" component={MovieSearch} />
	    <Route path="/other" component={Other} />
  	</Route>
  </Router>
);

export default Routes;