import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import charactersReducer from './charactersReducer'
import initiationReducer from './initiationReducer'

export default combineReducers({
  usersReducer,
  charactersReducer,
  initiationReducer
});