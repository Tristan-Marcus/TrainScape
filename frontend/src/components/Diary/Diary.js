import React, {useState, useEffect, Fragment} from 'react'

import { Navbar } from '../Navbar/Navbar'
import { WeekButton } from './WeekButton'
import { AddWorkoutButton } from './AddWorkoutButton'
import { AddWorkoutModal } from './AddWorkoutModal'
import { WorkoutCard } from './WorkoutCard'


export const Diary = () => {
    const [userEmail, setUserEmail] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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
                    setUserEmail(data.email)
                    setLoading(false)
                })
        }
    }, [])

    const fetchWorkout = () => {
        fetch('http://localhost:8000/diary/workouts/')
        .then(response => response.json())
        .then(data =>
            console.log('Data: ', data) 
            )
    } 
 
    return (
        <div className="pb-5" style={{backgroundColor: "gray", height: "100%"}}>
            {loading === false && (
                <Fragment>
                    <Navbar />

                    {fetchWorkout()}

                    <div className="container">
                        
                        <div className="d-flex justify-content-between">
                            
                            <WeekButton />
                            <AddWorkoutButton />
                            <AddWorkoutModal />

                        </div>
                    </div>

                    <div className="container mt-5">
                        <div className="row row-cols-3 row-cols-md-3 g-4">
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />
                            <WorkoutCard />

                        </div>
                    </div>
                </Fragment>
                
            )}
            
        </div>
    )
}