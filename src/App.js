import React from 'react';
import logo from './assets/img/logo.png';
import { Calculator } from './features';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <img src={logo} className="logo" alt="logo" draggable={false} />
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
