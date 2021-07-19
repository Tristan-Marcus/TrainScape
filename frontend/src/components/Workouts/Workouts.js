import React, { useState, useEffect, Fragment } from 'react';

import { Navbar } from '../Navbar/Navbar';
import { WorkoutsNavbar } from './WorkoutsNavbar';
import { WorkoutsView } from './WorkoutsView'

export function Workouts() {
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

    return (
        <div style={{backgroundColor: "gray", height: "100vh"}}>
            {loading === false && (
            <Fragment>
                <Navbar />
                <WorkoutsNavbar />
                <WorkoutsView />
            </Fragment>
            )}
        </div>
    )
}