import React from 'react';

import './App.css';
import Category from '../Category';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Book inspo - what to read next?</h1>
       <Category category="History"/>
       <Category category="Science"/>
       <Category category="Crime"/>
      </header>
    </div>
  );
}

export default App;
