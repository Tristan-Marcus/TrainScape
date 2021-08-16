import { createStore, combineReducers } from "redux";

import diary from './containers/Diary/reducers'
import profile from './containers/Profile/reducers'
import homepage from './containers/Homepage/reducers'
import workouts from './containers/Workouts/reducers'
import analytics from './containers/Analytics/reducers'
import exerciseLibrary from './containers/ExerciseLibrary/reducers'

const reducers = combineReducers({ 
    diary, 
    profile, 
    homepage, 
    workouts, 
    analytics, 
    exerciseLibrary 
})

export default createStore(reducers)