import { createStore, combineReducers } from 'redux'
import question from './question'
import user from './user'



const reducer = combineReducers({ question, user })
const store = createStore(reducer)
window.store = store
export default store