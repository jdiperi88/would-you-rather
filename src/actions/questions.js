import {_getQuestions, _saveQuestion} from '../utils/_DATA'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


function get_questions(questions){
    return {
        type : GET_QUESTIONS,
        questions
    }
}

export function handle_get_questions(){
    return(dispatch) =>{
        return _getQuestions()
                .then(questions=>{
                    console.log(questions)
                    dispatch(get_questions(questions))
                })
    }
}

function add_questions(questions){
    return {
        type : ADD_QUESTION,
        questions
    }
}

export function handle_add_questions(questions){
    return(dispatch) =>{
        _saveQuestion(questions)
        return _getQuestions()
                .then(questions=>{
                    dispatch(add_questions(questions))
                })
    }
}