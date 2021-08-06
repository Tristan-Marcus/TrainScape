import React, { useState, useEffect, Fragment, useCallback } from 'react';

import { Navbar } from '../Navbar/Navbar';
import { WorkoutsNavbar } from './WorkoutsNavbar';
import { WorkoutsView } from './WorkoutsView'

export const Workouts = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userID, setUserID] = useState('')
    const [workouts, setWorkouts] = useState([])
    const [loading, setLoading] = useState(true)

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
                    setUserEmail(data.email)
                    setUserID(data.pk)
                    setLoading(false)
                })

            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchWorkouts = useCallback(() => {
        try {
            fetch(`http://localhost:8000/diary/workouts/user${userID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            .then(res => res.json())
            .then(data => {
                setWorkouts(data)
            })
        } catch (e) {
            console.log(e)
        }
    }, [userID])

    useEffect(() => {
        fetchUserData()
        fetchWorkouts()
    }, [userID, fetchWorkouts])

    return (
        <div style={{backgroundColor: "gray", height: "100vh"}}>
            {loading === false && (
            <Fragment>
                <Navbar />
                <WorkoutsNavbar />
                <WorkoutsView workouts={workouts}/>
            </Fragment>
            )}
        </div>
    )
}