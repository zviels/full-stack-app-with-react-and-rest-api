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

        // Use The Render Prop To Pass React Router Props From The Route Component To The Rendered Component

        <Route { ... rest } render={ (props) => <Component { ... props } /> }/>

        :

        <Redirect to="/sign-in" />

    );

}

// Export Component

export default PrivateRoute;