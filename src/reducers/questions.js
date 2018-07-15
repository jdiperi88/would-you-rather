import {GET_QUESTIONS, ADD_QUESTION, SELECT_ANSWER} from '../actions/questions'

export default function questions(state={},actions){
    switch(actions.type){
        case GET_QUESTIONS:
            return {
                ...state,
                ...actions.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                ...actions.questions
            }
        case SELECT_ANSWER:
            return {
                ...state,
                ...actions.questions
            }
        default:
            return state
    }
}