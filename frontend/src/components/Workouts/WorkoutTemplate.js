import React from 'react'

export function WorkoutTemplate() {

    return (
        <div className="list-group-item list-group-item-action pb-5">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 text-success" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-current="true">Workout Name</h5>
                <small>Duration: 20 minutes</small>
                
                <div className="d-flex">
                    <button className="btn btn-primary">
                        Add to Diary
                    </button>

                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle m-1" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            ...
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Delete</button></li>
                            <li><button class="dropdown-item" type="button">Duplicate</button></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
            <p className="mb-1">Workout Description</p>
        </div>
    )
}