import React from 'react'


export function ExerciseCard(props) {

    return (
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.exercise.name}</h5>
                    <p class="card-text">{props.exercise.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Muscle Groups: </small>
                </div>
            </div>
        </div>
    )
}