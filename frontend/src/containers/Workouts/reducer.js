import { ActionTypes } from './constants'

const defaultState = {
    workouts: [],
}

export default function workoutReducer(state = defaultState, action) {
    switch(action.type) {
        case ActionTypes.SET_WORKOUTS:
            return {...state, workouts: action.payload}
        default:
            return state
    }
}