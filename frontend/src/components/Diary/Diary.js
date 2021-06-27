import React from 'react'

import { Navbar } from '../Navbar/Navbar'

import { WeekButton } from './WeekButton'
import { AddWorkoutButton } from './AddWorkoutButton'
import { AddWorkoutModal } from './AddWorkoutModal'
    


export function Diary() {
 
    return (
        <div style={{backgroundColor: "gray", height: "100vh"}}>
            <Navbar />
            
            <div className="container">
                
                <div className="d-flex justify-content-between">
                    
                    <WeekButton />
                    <AddWorkoutButton />
                    <AddWorkoutModal />

                </div>
            </div>
        </div>
        
    )
}