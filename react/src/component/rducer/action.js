export function addQuestionToState(newQuestion){
    return {type:'ADD_ QUESTION' ,payLoad:newQuestion}
}

export function updateQuestion(question){
    return {type:'UPDATE_QUESTION',payLoad: question}
}
export function createQuestion(newQuestion){
    return {type:'CREATE_QUESTION',payLoad:newQuestion}
}
export function deleteQuestion(id){
    return {type:'DELETE_QUESTION',payLoad:id }
}
export function saveUser(user) {
    return { type: 'LOG_IN_USER', payLoad: user }
}
export function addQuestionsToState(newQuestions){
    return {type:'ADD_ QUESTIONS' ,payLoad:newQuestions}
}


