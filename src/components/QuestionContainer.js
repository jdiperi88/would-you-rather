import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handle_get_questions } from '../actions/questions'
import Question from './Question';

class QuestionContainer extends Component{
    componentDidMount(){
        this.props.dispatch(handle_get_questions());
    }
    render(){
        const { questionsArr } = this.props
        return(
            <div className='question-list-container container'>
                {questionsArr.map(item=>{
                    return <Question key={item.id} question={item} />
                })}
            </div>
        )
    }
}
const mapStateToProps = ({questions}) =>{
    // const questionsArr = Object.keys(questions).map(item=>{
    //     return {questionsArr[0][item]: questions.item}
    // })
    const questionsArr = Object.values(questions)
    return {
        questionsArr
    }
}
export default connect(mapStateToProps)(QuestionContainer)