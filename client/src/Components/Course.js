import React from 'react';

// The Course Component

const Course = ({ title }) => {

    return (

    <a className="course--module course--link" href="/course-detail">
        <h2 className="course-label">Course</h2>
        <h3 className="course--title">
            { title }
        </h3>
    </a>

    );

}

// Export Component

export default Course;