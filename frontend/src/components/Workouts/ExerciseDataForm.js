import React, { useEffect, useState, Fragment } from 'react'

export const ExerciseDataForm = (props) => {
    const [readyFlag, setReadyFlag] = useState(false)

    const [exerciseData, setExerciseData] = useState({
        name: "",
        notes: "",
        duration: "",
        sets: [{reps: 0, weight: 0, distance: 0}]
    })

    const exerciseDataHandler = (event) => {
        setExerciseData( (prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    useEffect( () => {
        if(readyFlag === true) {
            console.log(exerciseData)
            props.onChange(exerciseData)
        }
    }, [readyFlag])
    

    return (
        <Fragment>
                <div className="form-control mb-3">
                    
                    <div className="m-1">
                        <input className="form-check-input m-1" type="checkbox" value={props.exercise.name} id="name" onChange={exerciseDataHandler}/>
                        <label className="form-check-label" htmlFor="name"> {props.exercise.name} </label>
                    </div>

                    {// TODO: find a way to get set data input
                    /*
                        <div className="m-3">
                            <table>
                                <tbody>
                                    <Fragment>
                                        {exerciseData.sets.map((set, i) => {
                                            return (
                                                <tr className='d-block' key={i}> 
                                                    <td>
                                                        Set {i}
                                                    </td>
                                                
                                                    <td>
                                                        <label className="form-label" htmlFor="reps">
                                                            Reps
                                                        </label>
                                                        <input id='reps' value={set.reps} style={{width: "60px"}} type="number" onChange={e => handleInputChange(e, i)}/>
                                                    </td>
                                                
                                                    <td>
                                                        <label className="form-label" htmlFor="weight">
                                                            Weight
                                                        </label>
                                                        <input id='weight' value={set.weight} style={{width: "100px"}} type="number" onChange={e => handleInputChange(e, i)}/>
                                                    </td>
                                                    
                                                    <td>
                                                        <label className="form-label" htmlFor="distance">
                                                            Distance
                                                        </label>
                                                        <input id='distance' value={set.distance} style={{width: "100px"}} type="number" onChange={e => handleInputChange(e, i)}/>
                                                    </td>

                                                    <td>
                                                        {exerciseData.sets.length !== 1 && <button onClick={() => removeSets(i)}>Remove</button>}
                                                        {exerciseData.sets.length - 1 === i && <button onClick={addSets}>Add</button>}
                                                    </td>
                                                
                                                </tr>
                                            )
                                        })}
                                    </Fragment>
                                     
                                </tbody>
                            </table>
                        </div>
                        */
                    }
                    
                    
                    <div className="mb-1 d-flex">
                        <label className="form-label m-1" htmlFor="notes">
                            Notes:
                        </label>
                        <input className="form-control" type="text" value={exerciseData.notes} id="notes" onChange={exerciseDataHandler} />
                    </div>
                    

                    <div className="mb-1 d-flex">
                        <label className="form-label m-1" htmlFor="duration">
                            Duration:
                        </label>
                        <input className="form-control" type="text" value={exerciseData.duration} id="duration" onChange={exerciseDataHandler}/>
                    </div>

                    <button type="button" onClick={(event) => setReadyFlag(true)}>Click this when all data is added</button>
                    
                </div>
            
        </Fragment>
        
    )
}