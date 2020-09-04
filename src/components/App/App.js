import React from 'react';

import css from './App.module.css';


import Navbar from '../Navbar';
import Home from '../Home';
import Favorites from '../Favorites';
import Categories from '../Categories';
import Search from '../Search';
import NotFound from '../NotFound';
import { Switch, Route } from 'react-router-dom';
/*import { View } from 'react-native-web'*/



const App = () => {
  return (
    <div className={css.App}>
       <Navbar />
       <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/favorites" component={Favorites} />
          <Route path="/categories" component={Categories} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
       </Switch>
    </div>
    
  );
}

export default App;

