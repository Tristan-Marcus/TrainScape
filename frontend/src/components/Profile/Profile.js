import React, { useState, useEffect, Fragment } from 'react'

import { Navbar } from '../Navbar/Navbar';
import { ProfilePanel } from './ProfilePanel';

export function Profile() {
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

                <div className="mt-5 d-flex align-items-center justify-content-around">

                    <ProfilePanel />

                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                        <form className="mt-5">

                            <div className="mb-3">
                                <label htmlFor="exampleInputName1" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
                                <div id="nameHelp" className="form-text"></div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputName2" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputName2" aria-describedby="nameHelp"/>
                                <div id="nameHelp" className="form-text"></div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" defaultValue={userEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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