import React, { useState } from 'react'

import { SearchBar } from '../Diary/SearchBar'

export function NewWorkoutModal() {
    const [userID, setUserID] = useState()
    const [loading, setLoading] = useState(true)

    const [workoutName, setWorkoutName] = useState('')
    const [workoutNotes, setWorkoutNotes] = useState('')
    const [workoutExercises, setWorkoutExercises] = useState([])


    const fetchUserData = () => {
        try {
            if (localStorage.getItem('token') === null) {
                window.location.replace('http://localhost:3000/login')
            } else {
                fetch('http://localhost:8000/diary/auth/user/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${localStorage.getItem('token')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    setUserID(data.pk)
                    setLoading(false)
                })

            }
        } catch (e) {
            console.log(e)
        }
    }


    const onSubmit = e => {
        try {
            e.preventDefault()
            
            fetchUserData()

            const WorkoutData = {
                name: workoutName,
                date: new Date(),
                notes: workoutNotes,
                is_completed: false,
                user: userID,
                exercises: workoutExercises
            }

            fetch('http://localhost:8000/diary/create-workout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(WorkoutData)
            })
            .then(res => res.json())
            .then(data => {
                console.log('Workout Successfully Created:' , data)
            })
        } catch (e) {
            console.log(e)
        }
        
    }


    return (
        <div className="modal fade" id="testModal" tabIndex="-1" aria-labelledby="testModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{height: "60vh"}}>
                                
                    <div className="modal-header">
                        <h5 className="modal-title" id="testModalLabel">Create your workout</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">

                            <form className="mt-5" onSubmit={onSubmit}>
                    
                                <div class="mb-3">
                                    <label htmlFor="name" className="form-label">Name: </label>
                                    <input className="form-control" 
                                        name="name"
                                        type="text"
                                        value={workoutName}
                                        onChange={e => setWorkoutName(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div class="mb-3">
                                    <label htmlFor="notes" className="form-label">Notes: </label>
                                    <input className="form-control" 
                                        name="notes"
                                        type="text"
                                        value={workoutNotes}
                                        onChange={e => setWorkoutNotes(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exercises" className="form-label">Exercises:</label>
                                    <input className="form-control" 
                                        name="exercises"
                                        type="text"
                                        value={workoutExercises}
                                        onChange={e => setWorkoutExercises(e.target.value)}
                                        required
                                    />
                                </div>

                                
                                
                                <button type="submit" className="btn btn-primary">Create Workout</button>
                            </form>
                        
                    </div>
                    
                    {/*<div className="modal-footer">

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

                    </div>*/}

                </div>
            </div>
        </div>
    )
}