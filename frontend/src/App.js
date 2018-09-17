import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
