import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'


export const AccountDetailsForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <Fragment>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <form className="mt-5">

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={props.user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                            
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </Fragment>
    )
}