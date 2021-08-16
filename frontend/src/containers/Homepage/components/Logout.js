import React, {useState, useEffect, Fragment} from 'react'

import { Navbar } from '../../../components/Navbar'

export const Logout = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            window.location.replace('http://localhost:3000/login')
        } else {
            setLoading(false)
        }
    }, [])

    const handleLogout = e => {
        e.preventDefault()

        fetch('http://localhost:8000/diary/auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.clear()
                window.location.replace('http://localhost:3000/login')
            })
    }

    return (
        <div>
            {loading === false && (
                <Fragment>
                    <Navbar />
                    <h1>Are you sure you want to logout?</h1>
                    <input type='button' value='Logout' onClick={handleLogout}></input>
                </Fragment>
            )}
        </div>
    )
}