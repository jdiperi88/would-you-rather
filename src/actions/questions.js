import {_getQuestions} from '../utils/_DATA'
export const GET_QUESTIONS = 'GET_QUESTIONS'


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