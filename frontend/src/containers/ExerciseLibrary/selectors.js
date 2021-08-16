import { createSelector } from "reselect"

const exerciseLibraryState = (state) => state.exerciseLibrary

export const makeSelectExercises = createSelector(
    exerciseLibraryState, 
    exerciseLibrary => exerciseLibrary.exercises
)