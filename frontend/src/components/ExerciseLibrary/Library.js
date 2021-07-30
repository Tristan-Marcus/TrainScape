import React, { useState, useEffect, Fragment } from 'react'

import { Navbar } from '../Navbar/Navbar'
import { SearchBar } from '../Diary/SearchBar'
import { ExerciseCard } from './ExerciseCard'

export const Library = () => {
    const [userEmail, setUserEmail] = useState('')
    const [exercises, setExercises] = useState([])
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

    useEffect(() => {
        fetchUserData();
        fetchExercises();
    }, [])

    return (
        <div>
            {loading === false && (
            <Fragment>
                <Navbar />
                <div className="container mt-5">
                    <SearchBar />

                    <div className="container mt-5">
                        <div className="row row-cols-3 row-cols-md-3 g-4">
                            {exercises.map( element => (
                                <ExerciseCard exercise={element}/>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="mt-5">

                </div>
            </Fragment>
            )}
            
        </div>
        
    )
}