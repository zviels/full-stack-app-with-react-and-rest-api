import React from 'react';
import { Link } from 'react-router-dom'

// The Course Component

const Course = ({ course }) => {

    // Extract The Attributes 'ID' & 'Title' From The Course Object

    const { id, title } = course;

    // JSX

    return (

        <Link className="course--module course--link" to={ "/courses/" + id }>
            <h2 className="course-label">Course</h2>
            <h3 className="course--title">
                { title }
            </h3>
        </Link>

    );

}

// Export Component

export default Course;