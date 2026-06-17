import userReducer from "./reducer/useReducer";
import {createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer)
export default store