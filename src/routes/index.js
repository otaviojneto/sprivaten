import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../pages/index.jsx';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home} />
    </Switch>
  </Router>
);

export default Routes;
