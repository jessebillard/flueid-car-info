import './App.css';
import CarInfoContainer from './components/CarInfoContainer';
import Header from './components/Header';
import React, { Component } from 'react';

class App extends Component {
  render() {    
    return (
      <div>
        <Header />
        <CarInfoContainer/>
      </div>      
    );
  }
}

export default App;
