import React from 'react'

import { WorkoutTemplate } from './WorkoutTemplate'
import { NewWorkoutModal } from './NewWorkoutModal'

export function WorkoutsView(props) {

    return (
        <div className="container mt-3" style={{backgroundColor: "white", height: "80vh"}}>
            
            <NewWorkoutModal />

            <div className="list-group">
                {props.workouts.map( element => (
                    <WorkoutTemplate workout={element}/>
                ))}
            </div>

        </div>
    )

}