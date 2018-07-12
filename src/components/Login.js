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
        const {users,ids} = this.props
        return(
            <div  className='login-container container'>
                <div>
                    <h1>WELCOME TO WOULD YOU RATHER????</h1>
                </div>
                <img src={require('../images/sample_avatar.jpg')} />
                <label for="log-in">Sign In</label>
                <select id='log-in' onChange={(e)=>{
                    this.handleLoginSelection(e)
                }}>
                    <option value="none" selected>Please Select A User</option>
                    {users && ids.map((id)=>{

                        return <option value={id[0]}>{id[1]}</option>
                    })}
                    
                    
                    
                </select>
                {}
            </div>
        )
    }
}

const mapStateToProps = ({users},props) =>{
     var ids = Object.keys(users).map((e)=>{
        return [e,users[e].name]
     })
    return {
        users,
        ids,
    }
}

export default connect(mapStateToProps)(Login) 