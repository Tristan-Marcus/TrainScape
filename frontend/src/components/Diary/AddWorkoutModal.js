import React from 'react'

import { SearchBar } from './SearchBar'
import { WorkoutTemplate } from './WorkoutTemplate'

export function AddWorkoutModal() {

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Choose a Workout</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <SearchBar />
                    
                    <div className="modal-body">
                        <div className="list-group">
                            <WorkoutTemplate />
                            <WorkoutTemplate />
                            <WorkoutTemplate />
                        </div>
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Add Workout</button>
                    </div>

                </div>
            </div>
        </div>
    )
}