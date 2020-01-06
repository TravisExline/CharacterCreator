import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import charactersReducer from './charactersReducer'

export default combineReducers({
  usersReducer,
  charactersReducer
});