import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'

class Login extends Component{
    handleLoginSelection =(e) =>{
        e.preventDefault()
        const { dispatch } = this.props
        const id = e.target.value
        dispatch(handleSetAuthedUser(id))
    }
    render(){
        return(
            <div>
                <div>
                    <h1>WELCOME TO WOULD YOU RATHER????</h1>
                    <h2>Please log in to continue</h2>
                </div>
                <img src={require('../images/sample_avatar.jpg')} />
                <label for="log-in">Sign In</label>
                <select id='log-in' onChange={(e)=>{
                    this.handleLoginSelection(e)
                }}>
                    <option value="none" selected>Please Select A User</option>
                    <option value="Joey">Joey</option>
                </select>


            </div>
        )
    }
}


export default connect()(Login) 