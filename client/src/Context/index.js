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

    // Define The Create Course Function

    const createCourse = (details) => {

        const f = handleAsyncOperation (async (details) => {

            console.log(authenticatedUser);
            console.log(details);
            
            const { data } = await API.post('/courses', details, 
            
            { auth: 
                
                { 
                    
                    username: authenticatedUser.emailAddress, 
                    password: authenticatedUser.password 
                
                }
            
            });

            return data;

        });

        return f(details);
        
    }
    
    // Assign The Functions To The Data Manager

    dataManager.signIn = signIn;
    dataManager.signOut = signOut;
    dataManager.createCourse = createCourse;

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