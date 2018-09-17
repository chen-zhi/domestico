import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home /> */}
        <About />
      </div>
    );
  }
}

export default App;
