import React, { useState, useEffect, Fragment } from 'react'

import { Navbar } from '../Navbar/Navbar'
import { SearchBar } from '../Diary/SearchBar'
import { ExerciseCard } from './ExerciseCard'

export function Library() {
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
        <div>
            {loading === false && (
            <Fragment>
                <Navbar />
                <div className="container mt-5">
                    <SearchBar />

                    <div class="container mt-5">
                        <div class="row row-cols-3 row-cols-md-3 g-4">
                            <ExerciseCard />
                            <ExerciseCard />
                            <ExerciseCard />
                            <ExerciseCard />
                            <ExerciseCard />
                            <ExerciseCard />
                        </div>
                    </div>

                </div>
            </Fragment>
            )}
            
        </div>
        
    )
}