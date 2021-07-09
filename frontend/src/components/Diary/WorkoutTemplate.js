import React from 'react'

export function WorkoutTemplate() {

    return (
        <div className="list-group-item list-group-item-action pb-5" aria-current="true">
            
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Workout Name</h5>
                <small>Duration: 20 minutes</small>
            </div>

            <p className="mb-1">Workout Description</p>
        </div>
    )
}