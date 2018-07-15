import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
class Header extends Component{
    handleLogOut =() =>{
        const { dispatch } = this.props
        dispatch(handleSetAuthedUser('none'))
    }
    render(){
        const { authedUser } = this.props
        return(
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/dashboard' activeClassName="active" >Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to='/new' activeClassName="active" >New Question</NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' activeClassName="active" >Leaderboard</NavLink>
                        </li>
                    </ul>
                    {authedUser ==='none' 
                    ?   <div>Please Log in</div>
                    :
                    <div>
                        <p>Hello, {authedUser} </p>
                        &nbsp;
                        &nbsp;
                        <NavLink to='/'  onClick={()=>{
                            this.handleLogOut();
                        }}>Logout</NavLink>
                    </div>
                    }

                </nav>
            </header>
        )
    }
}

const mapStateToProps = ({users, authedUser},props) =>{
    var ids = Object.keys(users).map((e)=>{
       return [e,users[e].name]
    })
   return {
       users,
       ids,
       authedUser
   }
}

export default connect(mapStateToProps)(Header) 