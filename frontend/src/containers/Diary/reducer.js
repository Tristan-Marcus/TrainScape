import { ActionTypes } from './constants'

const defaultState = {
    DiaryWorkouts: []
}

export default function diaryReducer(state = defaultState, action) {
    switch(action.type) {
        default:
            return state
    }
}