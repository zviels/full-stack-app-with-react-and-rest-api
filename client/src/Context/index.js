import React from 'react';

import DataManager from '../Utilities/DataManager';

// Create API Context

const APIContext = React.createContext();

// Extract The Provider Out Of The Context Object

const { Provider } = APIContext;

// Create A Data Manager

const dataManager = new DataManager();

// Define What To Provide

const value = {

    dataManager

}

// Create The API Provider

const APIProvider = ({ children }) => {

    return (

        <Provider value= { value }>
            { children }
        </Provider>

    );
    
}

// Export API Context

export { APIContext, APIProvider };
