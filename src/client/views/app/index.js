import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../home';
import Product from '../product';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact render={() => (<Product typeCheck="test type check" />)} />
    </div>
  </BrowserRouter>
);

export default App;
