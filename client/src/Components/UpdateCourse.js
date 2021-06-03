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

    // Fetch & Save The Course Data When The Page First Loads

    // eslint-disable-next-line
    useEffect(() => fetchCourse(), []);

    // Use Context To Exract Required Data & Functions

    const { dataManager, authenticatedUser } = useContext(APIContext);

    // Use Params To Extract The Course ID From The URL

    const { id } = useParams();

    // Use History

    const history = useHistory();

    // Helper Functions

    // fetchCourse

    const fetchCourse = async () => {

        try {

            // Try To Fetch Data About The Course

            const course = await dataManager.getCourse(id);            

            // If All Went Well - Split The Information Between Different Variables

            const { title, description, estimatedTime, materialsNeeded, User } = course;

            // If The Authenticated User Is Not The Creator Of The Course, Don't Let Him Update The Course
            // Redirect Him To The 'Forbidden' Page

            if (authenticatedUser.id !== User.id)
                return history.push('/forbidden');

            // Save The Data

            setTitle(title);
            setDescription(description);
            setEstimatedTime(estimatedTime);
            setMaterialsNeeded(materialsNeeded);
            
        } catch (error) {

            // If An Error Occurred - Handle It

            redirectBasedOnError(history, error);

        }

    }

    // Submit
    // This Function Sends A Request To The API, To Update The Course With The New Details That Were Provided By The User

    const submit = async (event) => {

        // Prevent The Default Behavior Of The Browser When Submitting The Form

        event.preventDefault();

        // Gather The Latest Information About The Course

        const userId = authenticatedUser.id;
        const updatedCourse = { id, title, description, estimatedTime, materialsNeeded, userId };

        try {

            // Try To Update The Course

            await dataManager.updateCourse(updatedCourse);

            // If All Went Well - Redirect The User To The Home Page

            history.push('/');

        } catch (error) {

            // If An Error Occurred, Try To Extract Error Messages From The Error Object

            const errorMessages = extractMessages(error);

            // If There Are Error Messages - Save Them

            if (errorMessages)
                setErrors(errorMessages);

            // If The Error Messages Couldn't Be Extracted - The Error Is Probably A Server Error
            // Handle It With The 'redirectBasedOnError' Function

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