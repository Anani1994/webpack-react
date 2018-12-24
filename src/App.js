import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Product from './Product';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact component={Product} />
    </div>
  </BrowserRouter>
);

export default App;
