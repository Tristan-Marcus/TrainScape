import React from 'react'



export function ExerciseCard() {

    return (
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Exercise Name</h5>
                    <p class="card-text">This is where the description of this exercise will belong.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Muscle Groups: </small>
                </div>
            </div>
        </div>
    )
}