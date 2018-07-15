import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handle_select_answer } from '../actions/questions'
import { handleInitialData } from '../actions/shared';


class QuestionVote extends Component{

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    state= {
        selectedOption: ''
    }
    handleOptionChange = (e) =>{
        this.setState({
          selectedOption: e.target.value
        });
    }
    handleAnswerSubmit = (e,authedUser,id) =>{
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handle_select_answer({
            authedUser,
            qid:id,
            answer: this.state.selectedOption
        }))
        this.props.history.push('/dashboard');
    }
    render(){
        const { authedUser, 
                questionBool, 
                id, 
                author, 
                option1text, 
                option2text, 
                optionSelected,
                option1Votes,
                option2Votes,
                totalVotes
                 } = this.props

        
        return(
            <div className='question-container'>
                <h1>{author} asks: Would You Rather???</h1>
                <div className='question-details'>
                    <img src={require(`../images/${author}.jpg`)} />
                    {questionBool != true
                        ?
                    <div>
                        <div className='radio-row'>
                        <input type="radio" value="optionOne" checked={this.state.selectedOption === 'optionOne'} onChange={(e)=>this.handleOptionChange(e)} />
                            <p>Option 1: {option1text}</p>
                        </div>
                        <div className='radio-row'>
                            <input type="radio" value="optionTwo" checked={this.state.selectedOption === 'optionTwo'} onChange={(e)=>this.handleOptionChange(e)} />
                            <p>Option 2: {option2text}</p>
                        </div>
                       <Link to={`/question/${id}`}> 
                            <button onClick={(e)=> this.handleAnswerSubmit(e,authedUser,id)}>
                                Submit Answer
                            </button>
                        </Link>
                    </div>
                    :
                    <div className='answer-poll-container'>
                        <h1>RESULTS</h1>
                        <div className={`answer-poll-row ${optionSelected ?'active':''}`}>
                            <p>Option 1: {option1text}</p>
                            <div className='percentage-bar-container'>
                                <div className='percentage-bar' style={{width:`${(option1Votes/totalVotes*100)}%`}}>
                                    {`${Math.floor((option1Votes/totalVotes*100))}%`} {option1Votes} of {totalVotes} Votes 
                                </div> 
                            </div>
                        </div>
                        <div className={`answer-poll-row ${optionSelected ?'active':''}`}>
                            <p>Option 2: {option2text}</p>
                            <div className='percentage-bar-container'>
                                <div className='percentage-bar' style={{width:`${(option2Votes/totalVotes*100)}%`}}>
                                    {`${Math.floor((option2Votes/totalVotes*100))}%`} {option2Votes} of {totalVotes} Votes 
                                </div> 
                            </div>
                        </div>


                    </div>
                    }
                </div>
            </div>
                
        )
    }
}
const mapStateToProps = ({authedUser, questions, users}, props ) =>{
    const id = props.match.params.id
    const usersAnswers = users[authedUser].answers
    const userAnswersIdArr = Object.keys(usersAnswers)
    const questionBool = userAnswersIdArr.indexOf(id)>=0
    const optionSelected = questionBool ? usersAnswers[id] : false
    const author = questions[id].author
    const option1text = questions[id].optionOne.text
    const option2text = questions[id].optionTwo.text
    const option1Votes = questions[id].optionOne.votes.length>0 ? questions[id].optionOne.votes.length : 0
    const option2Votes = questions[id].optionTwo.votes.length>0 ? questions[id].optionTwo.votes.length : 0
    const totalVotes = option1Votes + option2Votes 

    return {
        authedUser,
        questions,
        users,
        id,
        questionBool,
        userAnswersIdArr,
        optionSelected,
        author,
        option1text,
        option2text,
        option1Votes,
        option2Votes,
        totalVotes
        
    }
}
export default withRouter(connect(mapStateToProps)(QuestionVote))