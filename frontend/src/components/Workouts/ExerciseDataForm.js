import React, { /*useEffect,*/ useState, Fragment } from 'react'

export const ExerciseDataForm = (props) => {
    const [exerciseData, setExerciseData] = useState({
        name: "",
        notes: "",
        duration: "",
        sets: [{}]
    })

    const [exerciseSets, setExerciseSets] = useState([])

    const exerciseDataHandler = (event) => {
        setExerciseData( (prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    const addSets = () => {
        var currentSets = exerciseSets
        exerciseSets.push(exerciseSets.length + 1)
        setExerciseSets(currentSets)
    }

    /*
    useEffect( () => {
        console.log(exerciseData)
    }, [exerciseData])
    */

    
    return (
        <Fragment>
                <div className="form-control mb-3">
                    
                    <div className="m-1">
                        <input className="form-check-input m-1" type="checkbox" value={props.exercise.name} id="name" onChange={exerciseDataHandler}/>
                        <label className="form-check-label" htmlFor="name"> {props.exercise.name} </label>
                    </div>

                    {// TODO: find a way to get set data input
                        <div className="m-3">
                            <table>
                                <tbody>
                                    {exerciseSets.map((r) => (
                                        <tr className='d-block'> 
                                            <td>
                                                Set {r}
                                            </td>
                                        
                                            <td >
                                                <label className="form-label" htmlFor="repInput">
                                                    Reps
                                                </label>
                                                <input id='repInput' style={{width: "60px"}} type="number"/>
                                            </td>
                                        
                                            <td>
                                                <label className="form-label" htmlFor="weightInput">
                                                    Weight
                                                </label>
                                                <input id='weightInput' style={{width: "100px"}} type="number"/>
                                            </td>
                                            
                                            <td>
                                                <label className="form-label" htmlFor="distanceInput">
                                                    Distance
                                                </label>
                                                <input id='distanceInput' style={{width: "100px"}} type="number"/>
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                                
                            </table>
                            <button className="m-3" onClick={addSets}> Add a Set</button>
                        </div>
                    }
                    
                    
                    <div className="mb-1 d-flex">
                        <label className="form-label m-1" htmlFor="notes">
                            Notes: {exerciseData.notes}
                        </label>
                        <input className="form-control" type="text" value={exerciseData.notes} id="notes" onChange={exerciseDataHandler} />
                    </div>
                    

                    <div className="mb-1 d-flex">
                        <label className="form-label m-1" htmlFor="duration">
                            Duration: {exerciseData.duration}
                        </label>
                        <input className="form-control" type="text" value={exerciseData.duration} id="duration" onChange={exerciseDataHandler}/>
                    </div>
                    
                </div>
            
        </Fragment>
        
    )
}