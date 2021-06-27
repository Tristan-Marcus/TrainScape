import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { SearchBar } from '../Diary/SearchBar'
import { ExerciseCard } from './ExerciseCard'

export function Library() {

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <SearchBar />

                <div class="container mt-5">
                    <div class="row row-cols-3 row-cols-md-3 g-4">
                        <ExerciseCard />
                        <ExerciseCard />
                        <ExerciseCard />
                        <ExerciseCard />
                        <ExerciseCard />
                        <ExerciseCard />
                    </div>
                </div>

            </div>
        </div>
        
    )
}