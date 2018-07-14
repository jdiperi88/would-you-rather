import React, {Component } from 'react'
import { connect } from 'react-redux'
import {handle_add_questions} from '../actions/questions'
class New_Question extends Component{
    state = {
        option1:'',
        option2:''
    }
    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAddQuestion =(e)=>{
        
        const { option1,option2} = this.state
        const { dispatch, authedUser} = this.props

         dispatch(handle_add_questions({
            optionOneText :option1,
            optionTwoText :option2,
            author: authedUser
        }))
        e.preventDefault()
    }
    render(){
        const { authedUser } = this.props
        return(
            <div className='new-question-container container'>
             <h1>Create New Question</h1>
             <h2>Would you rather ...?</h2>
             <form>
                 <input type='text' name='option1' onChange={(e)=> this.handleInputChange(e)} placeholder='Enter Option One here' />
                 <h2>OR</h2>
                 <input type='text' name='option2' onChange={(e)=> this.handleInputChange(e)} placeholder='Enter Option Two here' />
                 <button
                    onClick={(e)=>{
                        this.handleAddQuestion(e);
                    }}
                 >
                 Add Question</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = ({users, authedUser},props) =>{
   return {
       authedUser
   }
}

export default connect(mapStateToProps)(New_Question) 