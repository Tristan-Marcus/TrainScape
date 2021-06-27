import React from 'react'

import { SearchBar } from './SearchBar'
import { WorkoutTemplate } from './WorkoutTemplate'

export function AddWorkoutModal() {

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Choose a Workout</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <SearchBar />
                    
                    <div class="modal-body">
                        <div class="list-group">
                            <WorkoutTemplate />
                            <WorkoutTemplate />
                            <WorkoutTemplate />
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Add Workout</button>
                    </div>

                </div>
            </div>
        </div>
    )
}