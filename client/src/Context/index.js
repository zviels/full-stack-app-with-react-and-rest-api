import React, { useState } from 'react';

import DataManager from '../Utilities/DataManager';

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

    // Define The Sign Out Functionality

    const signOut = () => setAuthenticatedUser(null);
    
    // Assign The Sign Out Function To The Data Manager

    dataManager.signOut = signOut;

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