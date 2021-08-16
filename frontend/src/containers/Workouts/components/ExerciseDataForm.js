import React, { useEffect, useState, Fragment } from 'react'

export const ExerciseDataForm = (props) => {
    const [readyFlag, setReadyFlag] = useState(false)

    const [exerciseData, setExerciseData] = useState({
        name: "",
        notes: "",
        duration: "",
        sets: []
    })

    const [tempReps, setReps] = useState()
    const [tempWeight, setWeight] = useState()
    const [tempDistance, setDistance] = useState()

    const exerciseDataHandler = (event) => {
        setExerciseData( (prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    const setDataHandler = (event) => {
        switch(event.target.id) {
            case "tempReps":
                setReps(event.target.value)
                break;
            case "tempWeight":
                setWeight(event.target.value)
                break;
            case "tempDistance":
                setDistance(event.target.value)
                break;
            default:
                console.log("Set data could not be handled")
        }
    }

    const exerciseSetsDataHandler = () => {
        setExerciseData( (prevState) => ( {
            ...prevState,
            sets: {reps: tempReps, weight: tempWeight, distance: tempDistance}
        }))
    }

    useEffect( () => {
        exerciseSetsDataHandler()
    }, [tempReps, tempWeight, tempDistance])

    useEffect( () => {
        if(readyFlag === true) {
            console.log(exerciseData)
            console.log(tempReps, tempWeight)
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
                    
                    <div className="m-3">
                        <table>
                            <tbody> 
                                <tr className='d-block'> 
                                    <td>
                                        Set 1
                                    </td>
                                
                                    <td>
                                        <label className="form-label" htmlFor="reps">
                                            Reps
                                        </label>
                                        <input id='tempReps' value={exerciseData.sets.reps} style={{width: "60px"}} type="number" onChange={setDataHandler}/>
                                    </td>
                                
                                    <td>
                                        <label className="form-label" htmlFor="weight">
                                            Weight
                                        </label>
                                        <input id='tempWeight' value={exerciseData.sets.weight} style={{width: "100px"}} type="number" onChange={setDataHandler}/>
                                    </td>
                                    
                                    <td>
                                        <label className="form-label" htmlFor="distance">
                                            Distance
                                        </label>
                                        <input id='tempDistance' value={exerciseData.sets.distance} style={{width: "100px"}} type="number" onChange={setDataHandler}/>
                                    </td>
                                
                                </tr>
                                    
                            </tbody>
                        </table>
                    </div>
                    
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