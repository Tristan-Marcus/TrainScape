import { ActionTypes } from './constants'

export const setExercises = (exercises) => ({
    type: ActionTypes.SET_EXERCISES,
    payload: exercises
})