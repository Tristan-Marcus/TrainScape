import React from 'react'

import { Navbar } from './Navbar'

export function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="bg-success border rounded-pill m-4" style={{height: "50px", width: "200px"}}>
                        <button className="btn float-start">⇦</button>
                        Week 1
                        <button className="btn float-end">⇨</button>
                    </div>

                    <button className="bg-primary border rounded-pill m-4" style={{height: "50px", width: "200px"}}>
                        Add a Routine
                    </button>
                </div>
            </div>
        </div>
        
    )
}