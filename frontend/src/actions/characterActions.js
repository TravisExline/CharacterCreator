export const ADD_CHARACTER = "ADD_CHARACTER"
export const FETCH_CHARACTERS = "FETCH_CHARACTERS"
export const SET_CHARACTERS = "SET_CHARACTERS"
export const CREATE_CHARACTER = "CREATE_CHARACTER"
export const DELETE_CHARACTER = "DELETE_CHARACTER"

export const addCharacter = character => {
    return {type: ADD_CHARACTER, character}
}

export const setCharacters = characters => {
    return {type: SET_CHARACTERS, characters}
}

export const deleteCharacter = id => {
    return {type: DELETE_CHARACTER, id}
}

export const destroyCharacter = id => {
    return dispatch => 
        fetch(`http://localhost:3001/characters/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then(() => {
            dispatch(deleteCharacter(id))
        })
}

export const fetchCharacters = () => {
    return dispatch => 
        fetch("http://localhost:3001/characters")
        .then(res => res.json())
        .then(data => {
            dispatch(setCharacters(data))
        })
}

export const createCharacter = character => {
    return dispatch => 
        fetch("http://localhost:3001/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({character})
        })
        .then(res => res.json())
        .then(character => {
            dispatch(addCharacter(character))
        })
    
}