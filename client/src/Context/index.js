import React, { useState } from 'react';
import Cookies from 'js-cookie';

import DataManager from '../Utilities/DataManager';
import handleAsyncOperation from '../Utilities/HandleAsyncOperation';
import API from '../Utilities/APIConfig';

// Create The API Context

const APIContext = React.createContext();

// Extract The Provider Out Of The Context Object

const { Provider } = APIContext;

// Create A Data Manager

const dataManager = new DataManager();

// Create The API Provider

const APIProvider = ({ children }) => {

    // Initialize State

    const [authenticatedUser, setAuthenticatedUser] = useState(Cookies.getJSON('authenticatedUser') || null);

    // Auth Config
    // This Function That Returns The Authentication Configuration Object
    // Axios Will Use That Object To Authenticate The User

    const authConfig = () => ({ auth: { username: authenticatedUser.emailAddress, password: authenticatedUser.password } });

    // Define The Sign In Function

    const signIn = (credentials) => {

        const f = handleAsyncOperation (async ({ emailAddress, password }) => {

            // Authenticate The User

            const { data } = await API.get('/users', { auth: { username: emailAddress, password } });

            // Also Save The Password Of The Authenticated User

            data.password = password;

            // Save The User In The Global State & In A Cookie

            setAuthenticatedUser(data);
            Cookies.set('authenticatedUser', JSON.stringify(data));

            // Return The User Data
            
            return data;

        });

        return f(credentials);

    }

    // Define The Sign Out Function

    const signOut = () => {

        // Set The Authenticated User To Null

        setAuthenticatedUser(null);

        // Remove The Cookie Of The Authenticated User

        Cookies.remove('authenticatedUser');
        
    }

    // Define The 'Create Course' Function

    const createCourse = (details) => {

        const f = handleAsyncOperation (async (details) => {
            
            // Insert The New Course Into The Database

            const { data } = await API.post('/courses', details, authConfig());

            // Return The Response

            return data;

        });

        return f(details);
        
    }

    // Define The 'Update Course' Function

    const updateCourse = (details) => {

        const f = handleAsyncOperation (async (updatedCourse) => {

            // Extract The Course ID From The Updated Course Object

            const { id } = updatedCourse;

            // Update The Course In The Database

            const { data } = await API.put('/courses/' + id, updatedCourse, authConfig());
            
            // Return The Response

            return data;

        });

        return f(details);

    }

    // Define The 'Delete Course' Function

    const deleteCourse = (courseID) => {

        const f = handleAsyncOperation (async (courseID) => {

            // Delete The Course From The Database

            await API.delete('/courses/' + courseID, authConfig());

        });

        return f(courseID);

    }
    
    // Assign The Functions To The Data Manager

    dataManager.signIn = signIn;
    dataManager.signOut = signOut;
    dataManager.createCourse = createCourse;
    dataManager.updateCourse = updateCourse;
    dataManager.deleteCourse = deleteCourse;

    // Define What The API Context Should Provide

    const value = {

        dataManager,
        authenticatedUser,
        setAuthenticatedUser

    }

    // JSX

    return (

        <Provider value= { value }>
            { children }
        </Provider>

    );
    
}

// Export API Context

export { APIContext, APIProvider };