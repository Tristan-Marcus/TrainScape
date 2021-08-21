import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import Axios from 'axios'

import { Navbar } from '../../../components/Navbar';
import { PersonalInfoForm } from './PersonalInfoForm';
import { NotificationsForm } from './NotificationsForm';
import { AccountDetailsForm } from './AccountDetailsForm';

import { setUser } from '../actions';
import { makeSelectUser } from '../selectors';


const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}))

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
})

export function Profile() {
    const { user } = useSelector(stateSelector)
    const { setUser } = actionDispatch(useDispatch())

    const [formSelected, setFormSelected] = useState({
        personalInfo: true,
        accountInfo: false,
        notifications: false
    })

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

                <div className="mt-5 p-5 d-flex align-items-center justify-content-center">

                    <div className="list-group p-5">
                        
                        <button id="personal" className="list-group-item list-group-item-action" style={{backgroundColor: "forestGreen"}} onClick={() => {
                            setFormSelected({personalInfo: true, accountInfo: false, notifications: false})
                            document.getElementById("personal").style="background-color: forestGreen"
                            document.getElementById("account").style="background-color: white"
                            document.getElementById("notifications").style="background-color: white"
                        }} >
                            Personal Info
                        </button>

                        <button id="account" className="list-group-item list-group-item-action" onClick={() => {
                            setFormSelected({personalInfo: false, accountInfo: true, notifications: false})
                            document.getElementById("personal").style="background-color: white"
                            document.getElementById("account").style="background-color: forestGreen"
                            document.getElementById("notifications").style="background-color: white"
                        }} >
                            Account Details
                        </button>
                        
                        <button id="notifications" className="list-group-item list-group-item-action" onClick={() => {
                            setFormSelected({personalInfo: false, accountInfo: false, notifications: true})
                            document.getElementById("personal").style="background-color: white"
                            document.getElementById("account").style="background-color: white"
                            document.getElementById("notifications").style="background-color: forestGreen"
                        }} >
                            Notifications
                        </button>

                    </div>

                    { (formSelected.personalInfo) ? <PersonalInfoForm user={user} /> : null }
                    { (formSelected.accountInfo) ? <AccountDetailsForm user={user} /> : null }
                    { (formSelected.notifications) ? <NotificationsForm user={user} /> : null }

                </div>
            </Fragment>
            )}

        </div>
        
        
    );
}