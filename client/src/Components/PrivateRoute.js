import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { APIContext } from '../Context';

// The Private Route Component

// Rename The Component Prop 
// Collect Any Props That Get Passed In The 'Rest' Variable

const PrivateRoute = ({ component: Component, ... rest }) => {

    // Use Context

    const { authenticatedUser } = useContext(APIContext);

    // JSX

    return (

        authenticatedUser ?

        <Route { ... rest }>
            <Component />
        </Route>

        :

        <Redirect to="/sign-in" />

    );

}

// Export Component

export default PrivateRoute;