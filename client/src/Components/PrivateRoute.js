import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { APIContext } from '../Context';

// The Private Route Component

// Rename The Component Prop 
// Collect Any Props That Get Passed In The 'Rest' Variable

const PrivateRoute = ({ component: Component, ...rest }) => {

    // Use Context To Extract Useful Information About The Authenticated User

    const { authenticatedUser } = useContext(APIContext);

    // Use Location

    const location = useLocation();

    // JSX

    return (

        // If The User Is Logged In - Show Him The Page He Requested

        authenticatedUser ?

        // Use The Render Prop To Pass React Router Props From The Route Component To The Rendered Component

        <Route { ... rest } render={ (props) => <Component { ... props } /> } />

        // If The User Is Not Logged In - Redirect Him To The 'Sign In' Page
        
        :

        <Redirect to= {{ pathname: '/signin', state: { from: location } }} />

    );

}

// Export Component

export default PrivateRoute;