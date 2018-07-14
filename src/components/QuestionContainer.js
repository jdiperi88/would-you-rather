import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handle_get_questions } from '../actions/questions'
import Question from './Question';

class QuestionContainer extends Component{
    state = {
        answered: false
    }
    componentDidMount(){
        this.props.dispatch(handle_get_questions());
    }

    handleAnswerChange=(answer)=>{
        this.setState({
            answered: answer
        })
    }
    render(){
        const { questionsArr, authedUser, answeredArr, unansweredArr } = this.props
        const { answered } = this.state
        return(
            <div className='question-list-container container'>
                <h1>{authedUser}'s QUESTIONS</h1>
                <div className={`answered-row`}>
                    <button 
                        onClick={()=> this.handleAnswerChange(false)}
                        className={`${answered ? '' : 'active'}`}
                    >UNANSWERED</button>
                    <button 
                        onClick={()=> this.handleAnswerChange(true)}
                        className={`${answered ? 'active':''}`}
                    >ANSWERED</button>
                </div>
                {answered 
                ?
                answeredArr.map(item=>{

                    return <Question 
                                key={item.id}   
                                question={item}
                                user = {authedUser}
                                answered = { answered }
                                authedUser = {authedUser}
                                 
                            />
                })
                :
                unansweredArr.map(item=>{

                    return <Question 
                                key={item.id} 
                                question={item}
                                user = {authedUser}
                                answered = { answered }
                                authedUser = {authedUser}
                                 
                            />
                })
                }
            </div>
        )
    }
}
const mapStateToProps = ({questions, authedUser}) =>{
    // const questionsArr = Object.keys(questions).map(item=>{
    //     return {questionsArr[0][item]: questions.item}
    // })
    const questionsArr = Object.values(questions)
    const answeredArr = questionsArr.filter(item=>{
        return item.optionOne.votes.indexOf(authedUser) >=0 || item.optionTwo.votes.indexOf(authedUser) >=0
     })
     const answeredIds = answeredArr.map(item=> item.id)
     const unansweredArr = questionsArr.filter(item=>{
        return answeredIds.indexOf(item.id) < 0
     })
    return {
        questionsArr,
        authedUser,
        answeredArr,
        unansweredArr,
    }
}
export default connect(mapStateToProps)(QuestionContainer)