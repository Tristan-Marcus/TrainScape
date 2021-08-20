import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'

import { createSelector } from 'reselect'
import { makeSelectExercises } from '../selectors'

import { setExercises } from '../actions'

import { Navbar } from '../../../components/Navbar'
import { SearchBar } from '../../../components/SearchBar'
import { ExerciseCard } from './ExerciseCard'

const stateSelector = createSelector(makeSelectExercises, (exercises) => ({
    exercises
}));

const actionDispatch = (dispatch) => ({
    setExercises: (exercises) => dispatch(setExercises(exercises))
})

export const Library = () => {
    const { exercises } = useSelector(stateSelector)
    const { setExercises } = actionDispatch(useDispatch())

    const [loading, setLoading] = useState(true)

    const fetchUserData = async () => {
        if (localStorage.getItem('token') === null) {
            window.location.replace('http://localhost:3000/login')
        } else {
            const response = await Axios.get('http://localhost:8000/diary/auth/user/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            }).catch((error) => {
                console.log("Fetch User Data Error: ", error)
            })
        }
        setLoading(false)
    }

    const fetchLibraryExercises = async () => {
        const response = await Axios.get("http://localhost:8000/diary/exercises/", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }).catch((error) => {
            console.log("Fetch Library Exercises Error: ", error)
        })

        setExercises(response.data)
    } 

    useEffect(() => {
        fetchUserData();
        fetchLibraryExercises()
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