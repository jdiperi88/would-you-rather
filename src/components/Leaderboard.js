import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from './Loader';
import { handleInitialData } from '../actions/shared';
import LeaderboardCard from './LeaderboardCard';


class Leaderboard extends Component{

    componentDidMount(){
        this.props.dispatch(handleInitialData())
      }


    render(){
        const { usersArr , authedUser, usersScore} = this.props

        return(
            <div className='question-list-container container'>
                <h1>LeaderboardCard</h1>
                <div className={`answered-row`}>
                </div>
                {
                usersScore.map(item=>{

                    return <LeaderboardCard
                                user={item[0]}
                                createdQuestions={item[1]}
                                answeredQuestions={item[2]}
                                totalScore = { item[3] }
                            />
                })}

            </div>
        )
    }
}
const mapStateToProps = ({users, authedUser}) =>{
    const usersArr = Object.values(users).map(item=>{
        return item
    })
    const usersScore = usersArr.reduce((arr,e)=>{
        let createdQuestionsScore = e.questions.length
        let userId = e.id
        let answeredQuestionsScore = Object.keys(e.answers).length
        arr.push([userId, createdQuestionsScore, answeredQuestionsScore ,(createdQuestionsScore + answeredQuestionsScore)])
        return arr
    },[])
    usersScore.sort(function(a, b) { 
        return b[2] - a[2] ;
    });
    return {
        authedUser,
        usersArr,
        usersScore
    }
}
export default connect(mapStateToProps)(Leaderboard)