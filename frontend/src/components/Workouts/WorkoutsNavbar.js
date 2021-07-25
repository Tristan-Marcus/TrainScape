import React from 'react'

export function WorkoutsNavbar() {

    return (
        <div className="container-fluid mt-5">
            <div className="d-flex container justify-content-between">
                
                <nav className="navbar navbar-light">
                    <form className="container-fluid">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">Search</span>
                            <input type="text" className="form-control" placeholder="Find a workout" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </form>                        
                </nav>
                
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testModal" aria-current="true">
                    New Workout
                </button>
                
            </div>
        </div>
    )
    
}