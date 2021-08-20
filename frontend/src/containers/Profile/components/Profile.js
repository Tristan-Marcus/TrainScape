import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import Axios from 'axios'

import { Navbar } from '../../../components/Navbar';
import { ProfilePanel } from './ProfilePanel';

import { makeSelectUser } from '../selectors';
import { setUser } from '../actions';


const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}))

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
})

export function Profile() {
    const { user } = useSelector(stateSelector)
    const { setUser } = actionDispatch(useDispatch())

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
            }).catch(
                (error) => {
                    console.log("An Error occurred trying to get user details: ", error)
                }
            )

            setUser(response.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            {loading === false && (
            <Fragment>
                <Navbar />

                <div className="mt-5 d-flex align-items-center justify-content-around">

                    <ProfilePanel />

                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                        <form className="mt-5">

                            <div className="mb-3">
                                <label htmlFor="exampleInputName1" className="form-label">First Name</label>
                                <input type="text" defaultValue={user.first_name} className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
                                <div id="nameHelp" className="form-text"></div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputName2" className="form-label">Last Name</label>
                                <input type="text" defaultValue={user.last_name} className="form-control" id="exampleInputName2" aria-describedby="nameHelp"/>
                                <div id="nameHelp" className="form-text"></div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" defaultValue={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            
                            
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>

                        <div className="mt-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                ON
                            </label>

                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                OFF
                            </label>
                        </div>

                    </div>
                </div>
            </Fragment>
            )}

        </div>
        
        
    );
}