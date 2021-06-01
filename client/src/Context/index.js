import React, { useState } from 'react';

import DataManager from '../Utilities/DataManager';
import handleAsyncOperation from '../Utilities/HandleAsyncOperation';
import API from '../Utilities/APIConfig';

// Create API Context

const APIContext = React.createContext();

// Extract The Provider Out Of The Context Object

const { Provider } = APIContext;

// Create A Data Manager

const dataManager = new DataManager();

// Create The API Provider

const APIProvider = ({ children }) => {

    // Initialize State

    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    // Auth Config
    // Function That Returns The Authentication Configuration Object

    const authConfig = () => ({ auth: { username: authenticatedUser.emailAddress, password: authenticatedUser.password } });

    // Define The Sign In Function

    const signIn = (credentials) => {

        const f = handleAsyncOperation (async ({ emailAddress, password }) => {

            const { data } = await API.get('/users', { auth: { username: emailAddress, password } });

            // Also Save The Password Of The Authenticated User In The Global State

            data.password = password;
            setAuthenticatedUser(data);
            
            return data;

        });

        return f(credentials);

    }

    // Define The Sign Out Function

    const signOut = () => setAuthenticatedUser(null);

    // Define The 'Create Course' Function

    const createCourse = (details) => {

        const f = handleAsyncOperation (async (details) => {
            
            const { data } = await API.post('/courses', details, authConfig());

            return data;

        });

        return f(details);
        
    }

    // Define The 'Update Course' Function

    const updateCourse = (details) => {

        const f = handleAsyncOperation (async (updatedCourse) => {

            const { id } = updatedCourse;
            const { data } = await API.put('/courses/' + id, updatedCourse, authConfig());
            
            return data;

        });

        return f(details);

    }

    // Define The 'Delete Course' Function

    const deleteCourse = (courseID) => {

        const f = handleAsyncOperation (async (courseID) => {

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

    // Define What To Provide

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