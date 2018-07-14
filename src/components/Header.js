import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'

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
                            <Link to='/' >Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/new' >New Question</Link>
                        </li>
                        <li>
                            Leaderboard
                        </li>
                    </ul>
                    {authedUser ==='none' 
                    ?   <div>Please Log in</div>
                    :
                    <div>
                        <p>Hello, {authedUser} </p>
                        &nbsp;
                        &nbsp;
                        <Link to='/'  onClick={()=>{
                            this.handleLogOut();
                        }}>Logout</Link>
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