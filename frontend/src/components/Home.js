import React from 'react'

import { Navbar } from './Navbar'

    


export function Home() {
 
    

    return (
        <div style={{backgroundColor: "gray", height: "100vh"}}>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="bg-success border rounded-pill m-4" style={{height: "50px", width: "200px"}}>
                        <button className="btn float-start">⇦</button>
                        Week 1
                        <button className="btn float-end">⇨</button>
                    </div>

                    <button type="button" className="bg-primary border rounded-pill m-4" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{height: "50px", width: "200px"}}>
                        Add a Workout
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Choose a Workout</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                
                                <div class="modal-body">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action pb-5" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Workout Name</h5>
                                                <small>Duration: 20 minutes</small>
                                            </div>
                                            <p class="mb-1">Workout Description</p>
                                        </a>
                                    </div>


                                </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Add Workout</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        
    )
}