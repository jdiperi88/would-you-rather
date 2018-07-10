import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import Login from './Login'
import Header from './Header';
import QuestionContainer from './QuestionContainer';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <QuestionContainer /> 
      </div>
    );
  }
}

export default connect()(App);
