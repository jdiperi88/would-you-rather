import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionContainer extends Component{
    render(){
        return(
            <div>Question </div>
        )
    }
}

export default connect()(QuestionContainer)