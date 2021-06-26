import React from 'react'

export function ExerciseTemplate() {

    return (
        <div className="list-group-item list-group-item-action pb-5" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Exercise Name</h5>
                <small>Duration: 5 minutes</small>
                
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button class="dropdown-item" type="button">Delete</button></li>
                        <li><button class="dropdown-item" type="button">Duplicate</button></li>
                    </ul>
                </div>

            </div>
            <p className="mb-1">The Exercise Description belongs here</p>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Set</th>
                        <th scope="col">Reps</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <button type="button" className="btn-sm btn-danger">-</button>
                        <th scope="row">1</th>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </td>
                    </tr>
                    <tr>
                        <button type="button" className="btn-sm btn-danger">-</button>
                        <th scope="row">2</th>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </td>
                    </tr>
                    <tr>
                        <button type="button" className="btn-sm btn-danger">-</button>
                        <th scope="row">3</th>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                        <input type="number" class="form-control" placeholder="0" />
                        </td>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </td>
                    </tr>
                    
                </tbody>

            </table>

            <button className="btn btn-primary">
                Add a set
            </button>
        </div>
    )

}