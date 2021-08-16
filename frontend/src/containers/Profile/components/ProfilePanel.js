import React from 'react'

export function ProfilePanel() {

    return (
        <div className="list-group">
            <button className="list-group-item list-group-item-action active" aria-current="true">Account</button>
            <button className="list-group-item list-group-item-action">Notifications</button>
            <button className="list-group-item list-group-item-action">Workouts</button>
        </div>
    )
    
}