import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { APIContext } from '../Context';

// The Sign Out Component

const UserSignOut = () => {

    // Use Context

    const { setAuthenticatedUser } = useContext(APIContext);

    // Sign Out

    setAuthenticatedUser(null);

    // Redirect User To The Home Page

    return <Redirect to="/" />

}

// Export Component

export default UserSignOut;