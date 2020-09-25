import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/" exact component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
