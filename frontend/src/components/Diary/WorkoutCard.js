import React from 'react'



export function WorkoutCard() {

    return (
        <div className="col">
            <div className="card h-100 ">
                
                <div className="card-body">
                    <h5 className="card-title">Workout Name</h5>
                    <div className="float-start m-5">
                        <p className="card-text">Bench</p>
                        <p className="card-text">Squat</p>
                        <p className="card-text">Deadlift</p>
                    </div>
                </div>
                
                <div className="card-footer">
                    <small className="text-muted"> </small>
                </div>
            </div>
        </div>
    )
}