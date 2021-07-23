import React from 'react'

import { ExerciseTemplate } from './ExerciseTemplate'

export function WorkoutModal(props) {

    return (
        <div className="modal fade" id={"modal" + props.modalID} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                                
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.workoutDetails.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">
                        <div className="list-group">
                        
                            {props.workoutDetails.exercises.map( element => (
                                <ExerciseTemplate exercise={element} />
                            ))}
                            
                        </div>
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Add Exercise</button>
                    </div>

                </div>
            </div>
        </div>
    )
}