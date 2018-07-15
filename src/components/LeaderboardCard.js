import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class LeaderboardCard extends Component{

    render(){
        const { createdQuestions, answeredQuestions, user } = this.props
        return(
            <div className='question-container'>
                <h1> {user}</h1>
                <div className='question-details'>
                    <img src={require('../images/sample_avatar.jpg')} />
                    <div>
                        <p>Answered Questions:{answeredQuestions}</p>
                        <p>Created Questions:{createdQuestions}</p>
                       <button>VIEW QUESTION</button>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default LeaderboardCard