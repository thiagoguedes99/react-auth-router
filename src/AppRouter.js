import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <h1>home</h1>} />
      <PrivateRoute path='/app' component={() => <h1>passou</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
