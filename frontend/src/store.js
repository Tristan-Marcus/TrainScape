import { createStore, combineReducers } from "redux";

import diary from './containers/Diary/reducer'
import profile from './containers/Profile/reducer'
import workouts from './containers/Workouts/reducer'
import analytics from './containers/Analytics/reducer'
import exerciseLibrary from './containers/ExerciseLibrary/reducer'

const reducers = combineReducers({ 
    diary, 
    profile, 
    workouts,
    analytics,
    exerciseLibrary 
})

export default createStore(reducers)