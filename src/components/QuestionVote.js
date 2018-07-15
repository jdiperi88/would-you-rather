import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handle_select_answer } from '../actions/questions'


class QuestionVote extends Component{
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
        const { authedUser, questions } = this.props
        // const option1 = Object.values(optionOne)
        // const option2 = Object.values(optionTwo)
        var id = this.props.match.params.id
        console.log(id)
        var author = questions[id].author
        var option1text = questions[id].optionOne.text
        var option2text = questions[id].optionTwo.text
        
        return(
            <div className='question-container'>
                <h1>{author} asks: Would You Rather???</h1>
                <div className='question-details'>
                    <img src={require('../images/sample_avatar.jpg')} />
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
                </div>
            </div>
                
        )
    }
}
const mapStateToProps = ({authedUser, questions}) =>{

    return {
        authedUser,
        questions,
        
    }
}
export default withRouter(connect(mapStateToProps)(QuestionVote))