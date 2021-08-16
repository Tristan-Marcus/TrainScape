import React, { useState, useEffect, Fragment} from 'react'

import { Navbar } from '../../../components/Navbar'

export const Analytics = () => {
    // const [userEmail, setUserEmail] = useState('')
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
                    // setUserEmail(data.email)
                    setLoading(false)
                })
        }
    }, [])

    return (
        <div>
            {loading === false && (
                <Fragment>
                    <Navbar/>
                    <h1>Nothing here</h1> 
                </Fragment>
                )}
        </div>
    )
}