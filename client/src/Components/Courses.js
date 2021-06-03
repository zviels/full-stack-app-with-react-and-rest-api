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

            const courses = await dataManager.getCourses();
            setCourses(courses);
        
        } catch (error) {

            redirectBasedOnError(history, error);

        }        

    }

    // renderCourses

    const renderCourses = () => {

        return courses.map((course) => {

            const { id } = course;
            return <Course key= { id } course= { course } />

        });

    }

    // Fetch Courses When The Page First Loads

    useFetch(fetchCourses);

    // useEffect(() => {

    //     let isMounted = true;

    //     // Fetch Data & Set State Only If Component Was Mounted

    //     if (isMounted)
    //         fetchCourses();

    //     // Clean Up Function
    //     // Don't Fetch Data And Don't Set State If The Component Is Not Visible

    //     return () => { isMounted = false };
  
    // });

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