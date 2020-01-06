import {ADD_CHARACTER, SET_CHARACTERS, DELETE_CHARACTER} from '../actions/characterActions'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_CHARACTER:
            return [...state, action.character]
        case SET_CHARACTERS:
            return action.characters
        case DELETE_CHARACTER:
            const character = state.find(c => c.id === action.id);
            const idx = state.indexOf(character)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
        default:
            return state
    }
}