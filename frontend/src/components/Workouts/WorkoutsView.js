import React from 'react'

import { WorkoutModal } from './WorkoutModal'
import { WorkoutTemplate } from './WorkoutTemplate'
import { NewWorkoutModal } from './NewWorkoutModal'

export function WorkoutsView() {

    return (
        <div className="container mt-3" style={{backgroundColor: "white", height: "80vh"}}>
            <WorkoutModal />
            <NewWorkoutModal />
            
            <div className="list-group">
                <WorkoutTemplate />
                <WorkoutTemplate />
                <WorkoutTemplate />
            </div>

        </div>
    )

}