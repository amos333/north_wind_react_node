import React from 'react';
import './App.css';

import CustomersList from './Components/CustomersList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomersList></CustomersList>
      </header>
    </div>
  );
}

export default App;
