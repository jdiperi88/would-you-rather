import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import Login from './Login'
import Header from './Header';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        loaded 
      </div>
    );
  }
}

export default connect()(App);
