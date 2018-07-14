import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from './Loader';
class QuestionVote extends Component{

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
                        <p>Option 1: {option1text}</p>
                        <p>Option 2: {option2text}</p>
                       <Link to={`/question/${id}`}> <button>VIEW QUESTION</button></Link>
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
export default connect(mapStateToProps)(QuestionVote)