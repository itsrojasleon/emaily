import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Header />
        <Route exact path="/" render={() => <div>Hello there</div>} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);
export default App;