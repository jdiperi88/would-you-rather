import {GET_QUESTIONS} from '../actions/questions'

export default function questions(state={},actions){
    switch(actions.type){
        case GET_QUESTIONS:
            return {
                ...state,
                ...actions.questions
            }
        default:
            return state
    }
}