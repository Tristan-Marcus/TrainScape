import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'

import { createSelector } from 'reselect'
import { makeSelectUser } from '../../Profile/selectors';
import { makeSelectWorkouts } from '../selectors'

import { setUser } from '../../Profile/actions';
import { setWorkouts } from '../actions';

import { Navbar } from '../../../components/Navbar';
import { WorkoutCard } from './WorkoutCard'
import { NewWorkoutModal } from './NewWorkoutModal'


const stateSelector = createSelector(makeSelectWorkouts, (workouts) => ({
    workouts
}))

const userStateSelector = createSelector(makeSelectUser, (user) => ({
    user
}))

const actionDispatch = (dispatch) => ({
    setWorkouts: (workouts) => dispatch(setWorkouts(workouts))
})

const userActionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
})


export const Workouts = () => {
    const { workouts } = useSelector(stateSelector)
    const { user } = useSelector(userStateSelector)

    const { setUser } = userActionDispatch(useDispatch())
    const { setWorkouts } = actionDispatch(useDispatch())

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
            
            setUser(response.data)
            setLoading(false)
        }
        
    }

    const fetchWorkouts = async () => {
        if(user) {
            const response = await Axios.get(`http://localhost:8000/diary/workouts/user${user.pk}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            }).catch((error) => {
                console.log("Fetch Workouts Error: ", error)
            })

            setWorkouts(response.data)
        }
        
    }

    useEffect(() => {
        fetchWorkouts()
    }, [user])

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div style={{backgroundColor: "gray", height: "100vh"}}>
            {loading === false && (
            <Fragment>
                <Navbar />
                
                <button className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#testModal" aria-current="true">
                    New Workout
                </button>

                <div className="container mt-3" style={{backgroundColor: "white", height: "80vh"}}>
            
                    <NewWorkoutModal />

                    <div className="list-group">
                        {workouts.map( element => (
                            <WorkoutCard workout={element}/>
                        ))}
                    </div>
                </div>

            </Fragment>
            )}
        </div>
    )
}