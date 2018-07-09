import React, { Component } from 'react'
import { connect } from 'react-redux'
class Header extends Component{
    render(){
        const { authedUser } = this.props
        return(
            <header>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            New Question
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
                        <a>Logout</a>
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