import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from './Loader';
import LeaderboardCard from './LeaderboardCard';

class Leaderboard extends Component{

    componentDidMount(){
    }


    render(){
        const { usersArr , authedUser, usersScore} = this.props

        return(
            <div className='question-list-container container'>
                <h1>{authedUser}'s QUESTIONS</h1>
                <div className={`answered-row`}>
                </div>
                {
                usersScore.map(item=>{

                    return <LeaderboardCard
                                user={item[0]}
                                createdQuestions={item[1]}
                                answeredQuestions={item[2]}
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
        arr.push([e.id,e.questions.length,Object.keys(e.answers).length])
        return arr
    },[])
    return {
        authedUser,
        usersArr,
        usersScore
    }
}
export default connect(mapStateToProps)(Leaderboard)