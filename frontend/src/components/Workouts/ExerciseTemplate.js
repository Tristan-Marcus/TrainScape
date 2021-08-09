import React, { useState, useEffect } from 'react'

export const ExerciseTemplate = (props) => {
    const [exerciseDetails, setExerciseDetails] = useState({})

    const fetchExerciseDetails = () => {
        try {
            fetch(`http://localhost:8000/diary/workouts/${props.workoutID}/${props.exercise}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            .then(res => res.json())
            .then(data => {
                setExerciseDetails(data)
            })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchExerciseDetails()
    })

    return (
        <div className="list-group-item list-group-item-action pb-5" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{exerciseDetails.exercise_name}</h5>
                <small>Duration: {exerciseDetails.duration}</small>
                
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Delete</button></li>
                        <li><button className="dropdown-item" type="button">Duplicate</button></li>
                    </ul>
                </div>

            </div>
            <p className="mb-1">{exerciseDetails.notes}</p>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Set</th>
                        <th scope="col">Reps</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <button type="button" className="btn-sm btn-danger">-</button>
                        <th scope="row">1</th>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                        </td>
                    </tr>
                    <tr>
                        <button type="button" className="btn-sm btn-danger">-</button>
                        <th scope="row">2</th>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                        </td>
                    </tr>
                    <tr>
                        <button type="button" className="btn-sm btn-danger">-</button>
                        <th scope="row">3</th>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                        <input type="number" className="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                        </td>
                    </tr>
                    
                </tbody>

            </table>

            <button className="btn btn-primary">
                Add a set
            </button>
        </div>
    )

}