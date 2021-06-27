import React from 'react'

export function WorkoutTemplate() {

    return (
        <div class="list-group-item list-group-item-action pb-5" aria-current="true">
            
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Workout Name</h5>
                <small>Duration: 20 minutes</small>
            </div>

            <p class="mb-1">Workout Description</p>
        </div>
    )
}