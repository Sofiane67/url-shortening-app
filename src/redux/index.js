import {createStore} from "redux"

const initialState = [];

const urlReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case "ADD_URL":
            newState = [
                ...state,
                action.value
            ]
            break;
    
        default:
            return state;
    }
    return newState;
}

export const store = createStore(urlReducer)