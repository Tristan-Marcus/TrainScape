import React from 'react'



export function WorkoutCard() {

    return (
        <div class="col">
            <div class="card h-100 ">
                
                <div class="card-body">
                    <h5 class="card-title">Workout Name</h5>
                    <div className="float-start m-5">
                        <p class="card-text">Bench</p>
                        <p class="card-text">Squat</p>
                        <p class="card-text">Deadlift</p>
                    </div>
                </div>
                
                <div class="card-footer">
                    <small class="text-muted"> </small>
                </div>
            </div>
        </div>
    )
}