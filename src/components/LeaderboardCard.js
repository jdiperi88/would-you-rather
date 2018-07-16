import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class LeaderboardCard extends Component{

    render(){
        const { createdQuestions, answeredQuestions, user, totalScore } = this.props
        return(
            <div className='question-container'>
                <h1> {user}</h1>
                <div className='question-details'>
                    <img src={require(`../images/${user}.jpg`)} />
                    <div>
                        <p>Answered Questions:{answeredQuestions}</p>
                        <p>Created Questions:{createdQuestions}</p>
                    </div>
                    <div className='score'>
                        <h1>Score</h1>
                        <h2>{totalScore}</h2>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default LeaderboardCard