import { createSelector } from "reselect";

const workoutsState = (state) => state.workouts

export const makeSelectWorkouts = createSelector(
    workoutsState,
    (workouts) => workouts.workouts
)