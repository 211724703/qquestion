import produce from 'immer'

const initialState = {
    question: []
}

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_ QUESTION': 
            { state.question.push(action.payLoad) }
            break
        case 'ADD_ QUESTIONS':
            { 
                console.log(action)
                state.question = [...action.payLoad.userQuestions] 
                }
            break
        case 'UPDATE_QUESTION':
            { state.question.find(x => x._id === action.payLoad._id).question = action.payLoad.question }
            break
        case 'CREATE_QUESTION':
            { state.question.push(x => x.id === action.payLoad.id) }
            break
        case 'DELETE_QUESTION':
            { 
                console.log(action);
                state.question = state.question.filter(x => x._id != action.payLoad)
                 }
            break
    }
}, initialState)
