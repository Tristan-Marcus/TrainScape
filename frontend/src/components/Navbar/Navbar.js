import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect( () => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true)
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/diary">TrainScape</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link"  to="/diary">Diary</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/workouts">Workouts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/library">Library</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/analytics">Analytics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Log Out</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}