import React from 'react';

import { Navbar } from '../Navbar';
import { WorkoutsNavbar } from './WorkoutsNavbar';
import { WorkoutsView } from './WorkoutsView'

export function Workouts() {

    return (
        <div style={{backgroundColor: "gray", height: "100vh"}}>
            <Navbar />
            <WorkoutsNavbar />
            <WorkoutsView />
        </div>
    )
}