// Import React & ReactDOM

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// The App Component

const App = () => {

    // Hooks

    // useState

    const [courses, setCourses] = useState([]);

    // useEffect

    useEffect(() => {

        // fetchCourses

        const fetchCourses = async () => {

            const response = await fetch('http://localhost:5000/api/courses');
            const data = await response.json();

            // Save Courses In The App Component

            setCourses(data);

        }

        // Call The 'fetchCourses' Function

        fetchCourses();

    }, []);

    // Helper Functions

    // getTitles

    const getTitles = () => {

        const titles = courses.map(course => course.title)
                              .map(title => <li>{ title }</li>);
        
        return titles;                      

    }
    
    // Return JSX

    return (

        <ul>
            { getTitles() }
        </ul>

    )

}

// Render The App

ReactDOM.render(<App />, document.querySelector('#root'));