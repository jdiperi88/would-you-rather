import { receiveUsers } from "./users";
import {_getUsers, _getQuestions} from '../utils/_DATA'
import { setAuthedUser } from '../actions/authedUser'


export function handleInitialData(){
    return(dispatch) => {
        return _getUsers()
                .then(users=>{
                    dispatch(receiveUsers(users))
                })
    }
}