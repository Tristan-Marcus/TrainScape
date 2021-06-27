import React from 'react'

export function AddWorkoutButton() {

    return (
        <button type="button" className="bg-primary border rounded-pill m-4" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{height: "50px", width: "200px"}}>
            Add a Workout
        </button>
    )
}