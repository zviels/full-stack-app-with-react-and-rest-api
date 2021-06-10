import React from 'react';
import { Link } from 'react-router-dom'

// The Course Component

const Course = ({ course }) => {

    // Extract Required Attributes From The Course Object

    const { id, title, User } = course;

    // JSX

    return (

        <Link className="course--module course--link" to={ "/courses/" + id }>
            <h2 className="course-label">Course</h2>
            <h3 className="course--title">
                { title }
            </h3>
            <div className="course-creator">By { User.firstName } { User.lastName }</div>
        </Link>

    );

}

// Export Component

export default Course;