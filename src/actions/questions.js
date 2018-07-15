import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SELECT_ANSWER = 'SELECT_ANSWER'


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

function select_answer(questions){
    return {
        type : SELECT_ANSWER,
        questions
    }
}

export function handle_select_answer(questions){
    return(dispatch) =>{
        _saveQuestionAnswer(questions).then(questions=>console.log(questions))
        return _getQuestions()
                .then(questions=>{
                    dispatch(select_answer(questions))
                })
    }
}