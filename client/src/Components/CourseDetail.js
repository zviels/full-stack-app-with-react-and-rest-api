import React, { Fragment, useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { APIContext } from '../Context';

import ActionsBar from './ActionsBar';
import redirectBasedOnError from '../Functions/redirectBasedOnError';

// The Course Detail Component

const CourseDetail = () => {

    // Initialize State

    const [details, setDetails] = useState({});

    // Use The API Context

    const { dataManager } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Extract The Course ID

    const { id } = useParams();

    // Helper Functions

    // fetchCourse

    const fetchCourse = async (id) => {

        try {

            const course = await dataManager.getCourse(id);
            setDetails(course);

        } catch (error) {

            redirectBasedOnError(history, error);
    
        }

    }

    // Fetch Course Details When The Page First Loads

    useEffect(() => fetchCourse(id), []);

    // JSX

    // If The Details Have Not Been Loaded Yet - Don't Render Anything

    if (Object.keys(details).length === 0)
        return null;

    // In Any Other Case..
    // Extract Attributes To Display On The Page

    const { title, description, estimatedTime, materialsNeeded, User } = details;
    const { firstName, lastName } = User;

    // Render The Course Detail Component
    
    return (

        <Fragment>
            <ActionsBar courseDetails= { details } />
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">
                                Course
                            </h3>
                            <h4 className="course--name">
                                { title }
                            </h4>
                            <p>
                                By { firstName + ' ' + lastName }
                            </p>
                            <ReactMarkdown>
                                { description }
                            </ReactMarkdown>
                        </div>
                        <div>
                            <h3 className="course--detail--title">
                                Estimated Time
                            </h3>
                            <p>
                                { estimatedTime }
                            </p>
                            <h3 className="course--detail--title">
                                Materials Needed
                            </h3>
                            <ReactMarkdown className="course--detail--list">
                                { materialsNeeded }
                            </ReactMarkdown>    
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>

    );

}

// Export Component

export default CourseDetail;