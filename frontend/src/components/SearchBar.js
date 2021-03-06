import React from 'react'

export function SearchBar() {

    return (
        <nav className="navbar navbar-light">
            <form className="container-fluid">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Search:</span>
                    <input type="text" className="form-control" placeholder="Find a workout" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </form>                        
        </nav>
    )
}