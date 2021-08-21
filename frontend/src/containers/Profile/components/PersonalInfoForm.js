import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'


export const PersonalInfoForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <Fragment>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <form className="mt-5">

                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">First Name</label>
                        <input type="text" value={props.user.first_name} className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
                        <div id="nameHelp" className="form-text"></div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputName2" className="form-label">Last Name</label>
                        <input type="text" value={props.user.last_name} className="form-control" id="exampleInputName2" aria-describedby="nameHelp"/>
                        <div id="nameHelp" className="form-text"></div>
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </Fragment>
    )
}