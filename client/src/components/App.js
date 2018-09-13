import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route path="/" render={() => <div>Hello there</div>} />
  </BrowserRouter>
);
export default App;