import React, { useEffect, useState, Fragment } from 'react'

export const ExerciseDataForm = (props) => {

    
    return (
        <Fragment>
            <div className="form-control">
                {/* // TODO: Create the form for sets
                    // TODO: Configure passing data using the onChange function to return back to the parent
                    
                    input: sets -> reps, weight, distance, is_completed=false
                    input: duration
                    input: notes
                
                */}

                <div className="m-1">
                    <input className="form-check-input m-1" type="checkbox" value={props.exercise.name} id="flexCheckDefault" onChange={props.onChange}/>
                    <label className="form-check-label" for="flexCheckDefault">
                        {props.exercise.name}
                    </label>
                </div>

                <div className="m-3">
                    TODO: Create a Form here for inputting set information
                </div>
                
                <div className="mb-1 d-flex">
                    <label className="form-label m-1" for="exerciseNotes">
                        Notes: {props.exercise.notes}
                    </label>
                    <input className="form-control" type="text" value={props.exercise.notes} id="exerciseNotes" onChange={props.onChange}/>
                </div>
                

                <div className="mb-1 d-flex">
                    <label className="form-label m-1" for="exerciseDuration">
                        Duration: {props.exercise.duration}
                    </label>
                    <input className="form-control" type="text" value={props.exercise.duration} id="exerciseDuration" onChange={props.onChange}/>
                </div>
                
            </div>
        </Fragment>
        
    )
}