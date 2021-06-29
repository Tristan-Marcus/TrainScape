import React from 'react'

import { Navbar } from '../Navbar/Navbar'

import { WeekButton } from './WeekButton'
import { AddWorkoutButton } from './AddWorkoutButton'
import { AddWorkoutModal } from './AddWorkoutModal'
import { WorkoutCard } from './WorkoutCard'
    


export function Diary() {
 
    return (
        <div className="pb-5" style={{backgroundColor: "gray", height: "100%"}}>
            <Navbar />
            
            <div className="container">
                
                <div className="d-flex justify-content-between">
                    
                    <WeekButton />
                    <AddWorkoutButton />
                    <AddWorkoutModal />

                </div>
            </div>
            
            <div class="container mt-5">
                <div class="row row-cols-3 row-cols-md-3 g-4">
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />
                    <WorkoutCard />

                </div>
            </div>
        </div>
        
    )
}