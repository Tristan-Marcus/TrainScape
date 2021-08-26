import React, { Fragment } from 'react'

import { WorkoutModal } from './WorkoutModal'

export const WorkoutCard = (props) => {

    const deleteWorkout = () => {
        try {
            fetch(`http://localhost:8000/diary/delete-workout/${props.workout.workout_id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const modalTarget = props.workout.workout_id.toString()

    return (
        <Fragment>
            <WorkoutModal modalID={modalTarget} workoutDetails={props.workout}/>

            <div className="list-group-item list-group-item-action pb-5">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 text-success" data-bs-toggle="modal" data-bs-target={"#modal" + modalTarget} >{props.workout.name}</h5>
                    
                    <div className="d-flex">
                        <button className="btn btn-primary">
                            Add to Diary
                        </button>

                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle m-1" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button" onClick={deleteWorkout}>Delete</button></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
                <p className="mb-1">{props.workout.notes}</p>
            </div>
        </Fragment>
    )
}