import React from 'react'

import { SearchBar } from '../Diary/SearchBar'

export function NewWorkoutModal() {

    return (
        <div className="modal fade" id="testModal" tabindex="-1" aria-labelledby="testModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{height: "100vh"}}>
                                
                    <div className="modal-header">
                        <h5 className="modal-title" id="testModalLabel">Choose a Workout</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">
                        <div className="list-group">

                            
                        </div>
                    </div>
                    
                    <div className="modal-footer">

                        <div className="btn-group dropup">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Add Exercise
                            </button>
                            
                            <div className="dropdown-menu" style={{height: "60vh", width: "20vw"}}>
                                <SearchBar />
                                <div className="m-5">
                                    <p>Bench</p>
                                    <p>Squat</p>
                                    <p>Deadlift</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}