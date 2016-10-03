// src/routes.js
import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import AppLayout from './layouts/AppLayout';
import MovieSearch from './components/MovieSearch';
import Single from './components/Single';

const Routes = (props) => (
  <Router {...props}>
  	<Route path="/" component={AppLayout}>
	    <IndexRoute component={MovieSearch} />
	    <Route path="/movie/:id" component={Single} />
  	</Route>
  </Router>
);

export default Routes;