import React, { useState, useEffect } from 'react'

import { SearchBar } from '../Diary/SearchBar'
import { ExerciseDataForm } from './ExerciseDataForm'

export const NewWorkoutModal = () => {
    const [userID, setUserID] = useState()
    const [loading, setLoading] = useState(true)

    const [exercises, setExercises] = useState([])

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

    const fetchExercises = () => {
        try {
            fetch('http://localhost:8000/diary/exercises/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setExercises(data)
            })
        } catch (e) {
            console.log(e)
        }
    }


    const onSubmit = e => {
        try {
            e.preventDefault()

            const WorkoutData = {
                name: workoutName,
                date: new Date(),
                notes: workoutNotes,
                is_completed: false,
                user: userID,
                exercises: workoutExercises
            }
            
            var workoutID

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
                console.log('Workout Successfully Created:' , data.workout_id)
                workoutID = data.workout_id

                for(let index = 0; index < workoutExercises.length; index++) {
                    let exerciseData = {
                        "workout_id": workoutID,
                        "exercise_name": workoutExercises[index].name,
                        "sets": workoutExercises[index].sets,
                        "notes": workoutExercises[index].notes,
                        "duration": workoutExercises[index].duration
                    }

                    fetch('http://localhost:8000/diary/workouts/add-exercise/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Token ${localStorage.getItem('token')}`
                        },
                            body: JSON.stringify(exerciseData)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Exercise Successfully Added to Workout: ', data)
                    })
                }
            })
        } catch (e) {
            console.log(e)
        }
        
    }

    useEffect(() => {
        fetchUserData()
        fetchExercises();
    }, [])


    return (
        <div className="modal fade" id="testModal" tabIndex="-1" aria-labelledby="testModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{height: "80vh"}}>
                                
                    <div className="modal-header">
                        <h5 className="modal-title" id="testModalLabel">Create your workout</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">

                            <form className="mt-3" onSubmit={onSubmit}>
                    
                                <div class="mb-3">
                                    <label htmlFor="name" className="form-label">Workout Name: </label>
                                    <input className="form-control" 
                                        name="name"
                                        type="text"
                                        value={workoutName}
                                        onChange={e => setWorkoutName(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div class="mb-3">
                                    <label htmlFor="notes" className="form-label">Workout Notes: </label>
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
                                    />
                                </div>

                                {exercises.map( element => (
                                    <ExerciseDataForm onChange={e => setWorkoutExercises([ ...workoutExercises, (e.target.value) ])} exercise={element}/>
                                ))}
                                
                                <button type="submit" className="btn btn-primary">Create Workout</button>
                            </form>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}