import { ActionTypes } from './constants'

const defaultState = {
    exercises: []
}

export default function exerciseLibraryReducer(state = defaultState, action) {
    switch(action.type) {
        case ActionTypes.SET_EXERCISES:
            return { ...state, exercises: action.payload }
        default:
            return state
    }
}