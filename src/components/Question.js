import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader';
class Question extends Component{

    render(){
        const { author,optionOne,optionTwo, timestamp,answered,authedUser,id, users } = this.props.question
        const option1 = Object.values(optionOne)
        const option2 = Object.values(optionTwo)
        const answer1 = optionOne.votes
        const answer2 = optionTwo.votes
        console.log(users)
        return(
            <div className='question-container'>
                <h1>{author} asks: Would You Rather???</h1>
                <div className='question-details'>
                    <img src={require(`../images/${author}.jpg`)} />
                    <div>
                        <p>Option 1: {option1}</p>
                        <p>Option 2: {option2}</p>
                       <Link to={`/question/${id}`}> <button>VIEW QUESTION</button></Link>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default Question