import React, { useEffect, useState, Fragment } from 'react'

export const ExerciseDataForm = (props) => {
    const [rows, setRows] = useState([])


    function addRows() {
        var currentRows = rows
        currentRows.push(currentRows.length + 1)
        setRows(currentRows)
    }

    
    return (
        <Fragment>
            <div className="form-control">
                {
                 // TODO: Create the form for sets
                 // TODO: Configure passing data using the onChange function to return back to the parent
                }
                
                <div className="m-1">
                    <input className="form-check-input m-1" type="checkbox" value={props.exercise.name} id="flexCheckDefault" onChange={props.onChange}/>
                    <label className="form-check-label" for="flexCheckDefault">
                        {props.exercise.name}
                    </label>
                </div>

                <div className="m-3">
                    <table>
                        <tbody>
                            {rows.map((r) => (
                                <tr className='d-block'> 
                                    <td>
                                        Set {r}
                                    </td>
                                
                                    <td >
                                        <label className="form-label" for="repInput">
                                            Reps
                                        </label>
                                        <input id='repInput' style={{width: "60px"}} type="number"/>
                                    </td>
                                
                                    <td>
                                        <label className="form-label" for="weightInput">
                                            Weight
                                        </label>
                                        <input id='weightInput' style={{width: "100px"}} type="number"/>
                                    </td>
                                    
                                    <td>
                                        <label className="form-label" for="distanceInput">
                                            Distance
                                        </label>
                                        <input id='distanceInput' style={{width: "100px"}} type="number"/>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                    <button id="addRowBtn" className="m-3" onClick={addRows}> Add a Set</button>
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