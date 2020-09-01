import React from 'react';

import './App.css';
import '../../index.css';
import Navbar from '../Navbar';
import Home from '../Home';
import Categories from '../Categories';
import Search from '../Search';
import NotFound from '../NotFound';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
       <Navbar />
       <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/categories" component={Categories} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
       </Switch>
    </div>
  );
}

export default App;
