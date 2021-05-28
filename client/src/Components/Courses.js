import React, { useEffect, useState } from 'react';

import DataManager from '../Utilities/DataManager';

import Course from './Course';
import NewCourseButton from './NewCourseButton';

// The Courses Component

const Courses = () => {

    // Initialize State

    const [courses, setCourses] = useState([]);

    // Helper Functions

    // fetchCourses

    const fetchCourses = async () => {

        const dataManager = new DataManager();
        const courses = await dataManager.getCourses();
        setCourses(courses);

    }

    // renderCourses

    const renderCourses = () => {

        return courses.map((course) => {

            const { id, title } = course;
            return <Course key= { id } title= { title } />

        });

    }

    // Fetch Courses When The Page First Loads

    useEffect(() => fetchCourses(), []);

    // JSX

    return (

        <main>
            <div className="wrap main--grid">
                { renderCourses() }
                <NewCourseButton />
            </div>
        </main>

    );

}

// Export Component

export default Courses;