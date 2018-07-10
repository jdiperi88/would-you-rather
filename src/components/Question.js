import React, { Component } from 'react'

class Question extends Component{

    render(){
        const { author,optionOne,optionTwo, timestamp } = this.props.question
        const option1 = Object.values(optionOne)
        const option2 = Object.values(optionTwo)
        return(
            <div className='question-container'>
                <h1>{author} asks: Would You Rather???</h1>
                <div className='question-details'>
                    <img src={require('../images/sample_avatar.jpg')} />
                    <div>
                        <p>{option1}</p>
                        <p>{option2}</p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = () =>{

}
export default Question