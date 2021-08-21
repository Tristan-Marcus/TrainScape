import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'


export const NotificationsForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <Fragment>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <form className="mt-5">

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

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </Fragment>
    )
}