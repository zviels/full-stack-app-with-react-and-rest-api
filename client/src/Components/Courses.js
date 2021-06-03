import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { APIContext } from '../Context';
import redirectBasedOnError from '../Functions/redirectBasedOnError';

import useFetch from '../Hooks/useFetch';

import Course from './Course';
import NewCourseButton from './NewCourseButton';

// The Courses Component

const Courses = () => {

    // Initialize State

    const [courses, setCourses] = useState([]);

    // Use The API Context

    const { dataManager } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Helper Functions

    // fetchCourses

    const fetchCourses = async () => {

        try {

            // Try To Fetch & Save Information About The Different Courses 

            const courses = await dataManager.getCourses();
            setCourses(courses);
        
        } catch (error) {

            // If An Error Occurred - Handle It

            redirectBasedOnError(history, error);

        }        

    }

    // renderCourses
    // This Function Returns A List Of Courses To Display

    const renderCourses = () => {

        return courses.map((course) => {

            const { id } = course;
            return <Course key= { id } course= { course } />

        });

    }

    // Fetch Courses When The Page First Loads

    useFetch(fetchCourses);

    // JSX

    return (

        <div className="wrap main--grid">
            { renderCourses() }
            <NewCourseButton />
        </div>

    );

}

// Export Component

export default Courses;