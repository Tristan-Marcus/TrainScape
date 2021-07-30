import React, { useEffect, useState, Fragment } from 'react'

export const ExerciseFormCheck = (props) => {

    
    return (
        <Fragment>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={props.exercise.exercise_id} id="flexCheckDefault" onChange={props.onChange}/>
                <label className="form-check-label" for="flexCheckDefault">
                    {props.exercise.name + "," + props.exercise.exercise_id }
                </label>
            </div>
        </Fragment>
        
    )
}