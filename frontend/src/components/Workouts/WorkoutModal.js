import React from 'react'

import { ExerciseTemplate } from './ExerciseTemplate'

export function WorkoutModal() {

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                                
                    <div className="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Choose a Workout</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">
                        <div className="list-group">

                            <ExerciseTemplate />
                            <ExerciseTemplate />
                            <ExerciseTemplate />
                            <ExerciseTemplate />
                            
                        </div>
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" class="btn btn-primary">Add Exercise</button>
                    </div>

                </div>
            </div>
        </div>
    )
}