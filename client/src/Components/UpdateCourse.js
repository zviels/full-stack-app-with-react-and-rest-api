import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { APIContext } from '../Context';
import change from '../Functions/change';
import extractMessages from '../Functions/extractMessages';
import redirectBasedOnError from '../Functions/redirectBasedOnError';

import Errors from './Errors';

// The 'Update Course' Component

const UpdateCourse = () => {

    // Initialize State

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);

    // Use Effect

    useEffect(() => {
        
        fetchCourse();

    }, []);

    // Use Context

    const { dataManager, authenticatedUser } = useContext(APIContext);

    // Use Params

    const { id } = useParams();

    // Use History

    const history = useHistory();

    // Helper Functions

    // fetchCourse

    const fetchCourse = async () => {

        try {

            const course = await dataManager.getCourse(id);            
            const { title, description, estimatedTime, materialsNeeded, User } = course;

            // If The Authenticated User Is Not The Course Creator, Don't Let Him Update The Course

            if (authenticatedUser.id !== User.id)
                return history.push('/forbidden');

            setTitle(title);
            setDescription(description);
            setEstimatedTime(estimatedTime);
            setMaterialsNeeded(materialsNeeded);
            
        } catch (error) {

            redirectBasedOnError(history, error);

        }

    }

    // Submit

    const submit = async (event) => {

        event.preventDefault();

        const userId = authenticatedUser.id;
        const updatedCourse = { id, title, description, estimatedTime, materialsNeeded, userId };

        try {

            await dataManager.updateCourse(updatedCourse);
            history.push('/');

        } catch (error) {

            const errorMessages = extractMessages(error);

            if (errorMessages)
                setErrors(errorMessages);

            else
                redirectBasedOnError(history, error);    

        }

    }

    // JSX

    // See If There Are Error Messages To Be Displayed

    const errorMessages = errors.length > 0 ? <Errors errors= { errors } /> : null;

    return (

        <div className="wrap">
            { errorMessages }
            <h2>Update Course</h2>
            <form onSubmit= { submit }>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">
                            Course Title
                        </label>
                        <input id="courseTitle" name="courseTitle" type="text" value= { title } onChange= { (event) => change(event, setTitle) } />
                        <p>By Joe Smith</p>
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
                    Update Course
                </button>
                <button className="button button-secondary" onClick= { () => history.push('/') }>
                    Cancel
                </button>
            </form>
        </div>   

    );

}

// Export Component

export default UpdateCourse;