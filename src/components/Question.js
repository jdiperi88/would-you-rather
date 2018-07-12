import React, { Component, Fragment } from 'react'

class Question extends Component{

    render(){
        const { author,optionOne,optionTwo, timestamp,answered,authedUser } = this.props.question
        const option1 = Object.values(optionOne)
        const option2 = Object.values(optionTwo)
        const answer1 = optionOne.votes
        const answer2 = optionTwo.votes
        console.log(answer2)
        return(
            
            <div className='question-container'>
                <h1>{author} asks: Would You Rather???</h1>
                <div className='question-details'>
                    <img src={require('../images/sample_avatar.jpg')} />
                    <div>
                        <p>Option 1: {option1}</p>
                        <p>Option 2: {option2}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question