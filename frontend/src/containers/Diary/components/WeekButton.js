import React from 'react'

export function WeekButton() {

    return (
        <div className="bg-success border rounded-pill m-4" style={{height: "50px", width: "200px"}}>
            <button className="btn float-start">⇦</button>
                Week 1
            <button className="btn float-end">⇨</button>
        </div>
    )
}