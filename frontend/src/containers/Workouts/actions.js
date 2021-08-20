import { ActionTypes } from './constants'

export const setWorkouts = (workouts) => ({
    type: ActionTypes.SET_WORKOUTS,
    payload: workouts
})