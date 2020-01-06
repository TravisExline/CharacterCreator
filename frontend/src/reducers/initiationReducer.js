import {ADD_INITIATION} from '../actions/initiationActions'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_INITIATION:
            return [...state, action.character]
        default:
            return state
    }
}