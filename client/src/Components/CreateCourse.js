import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { APIContext } from '../Context';
import change from '../Functions/change';
import extractMessages from '../Functions/extractMessages';
import redirectBasedOnError from '../Functions/redirectBasedOnError';

import Errors from './Errors';

// The 'Create Course' Component

const CreateCourse = () => {

    // Initialize State

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);

    // Use Context

    const { authenticatedUser, dataManager } = useContext(APIContext);

    // Extract The Name Of The Authenticated User

    const { firstName, lastName } = authenticatedUser;

    // Use History

    const history = useHistory();

    // Helper Functions

    const submit = async (event) => {

        event.preventDefault();

        try {

            const userId = authenticatedUser.id;

            const newCourse = { title, description, estimatedTime, materialsNeeded, userId };
            await dataManager.createCourse(newCourse);

            history.push('/');

        } catch (error) {

            const errorMessages = extractMessages(error);

            if (errorMessages)
                setErrors(errorMessages);

            else
                redirectBasedOnError(history, error);
                    
        }

    }

    // See If There Are Error Messages To Be Displayed

    const errorMessages = errors.length > 0 ? <Errors errors= { errors } /> : null;

    // JSX

    return (

        <div className="wrap">
            <h2>Create Course</h2>
            { errorMessages }   
            <form onSubmit= { submit }>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">
                            Course Title
                        </label>
                        <input id="courseTitle" name="courseTitle" type="text" value= { title } onChange= { (event) => change(event, setTitle) } />
                        <p>By { firstName + ' ' + lastName }</p>
                        <label htmlFor="courseDescription">
                            Course Description
                        </label>
                        <textarea id="courseDescription" name="courseDescription" value= { description } onChange= { (event) => change(event, setDescription) }></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">
                            Estimated Time
                        </label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value= { estimatedTime } onChange= { (event) => change(event, setEstimatedTime) } />
                        <label htmlFor="materialsNeeded">
                            Materials Needed
                        </label>
                        <textarea id="materialsNeeded" name="materialsNeeded" value= { materialsNeeded } onChange= { (event) => change(event, setMaterialsNeeded) }></textarea>
                    </div>
                </div>
                <button className="button" type="submit">
                    Create Course
                </button>
                <button className="button button-secondary" onClick= { () => history.push('/') }>
                    Cancel
                </button>
            </form>
        </div>

    );

}

// Export Component

export default CreateCourse;