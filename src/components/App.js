import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import Login from './Login'
import Header from './Header';
import QuestionContainer from './QuestionContainer';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import New_Question from './New_Question';
import QuestionVote from './QuestionVote'
import Leaderboard from './Leaderboard';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Switch>
          <div className="App">
            <Header />
            <Route exact path='/' render={()=>(
              authedUser === 'none'
              ?
                <Login />
              :
                <Redirect to='/dashboard' />
            )
            } />
            {/* {
            authedUser === 'none'
            ?
            <Redirect to='/' />
            :
            < Route exact path='/dashboard' component={QuestionContainer} />
            } */}
            < Route exact path='/new' component={New_Question} />
            < Route exact path='/dashboard' component={QuestionContainer} /> 
            < Route exact path='/leaderboard' component={Leaderboard} /> 
            < Route exact path='/question/:id' component={QuestionVote} /> 
          </div>
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App);
