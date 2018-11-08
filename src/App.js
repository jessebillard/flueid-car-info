import Header from './components/Header';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {    
    return (
      <div>
        <Header />
      </div>      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);
