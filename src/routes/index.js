import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ERROR
import Error404 from '../splashes/Error404';

// PAGES
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route component={Error404}/>
    </Switch>
  </Router>
);

export default Routes;