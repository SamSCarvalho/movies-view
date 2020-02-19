import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';

// ERROR
import Error404 from '../splashes/Error404';

// PAGES
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';


const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route component={Error404}/>
    </Switch>
  </Router>
);

export default Routes;