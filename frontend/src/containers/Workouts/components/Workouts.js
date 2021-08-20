import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'

import { createSelector } from 'reselect'
import { makeSelectExercises } from '../selectors'

import { setWorkouts } from '../actions';

import { Navbar } from '../../../components/Navbar';
import { WorkoutsNavbar } from './WorkoutsNavbar';
import { WorkoutsView } from './WorkoutsView'

/*
const stateSelector = createSelector(makeSelectWorkouts, (workouts) => ({
    workouts
}))

const actionDispatch = (dispatch) => ({
    setWorkouts: (workouts) => dispatch(setWorkouts(workouts))
})
*/

export const Workouts = () => {
    //const { workouts } = useSelector(stateSelector)
    //const { setWorkouts } = actionDispatch(useDispatch())

    const [loading, setLoading] = useState(true)



    //const [userEmail, setUserEmail] = useState('')
    const [userID, setUserID] = useState('')
    const [workouts, setWorkouts] = useState([])

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
                    //setUserEmail(data.email)
                    setUserID(data.pk)
                    setLoading(false)
                })

            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchWorkouts = useCallback(() => {
        if (loading === false) {
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
        }
    }, [userID, loading])

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