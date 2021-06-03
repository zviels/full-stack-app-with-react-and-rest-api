import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { APIContext } from '../Context';

// The Sign Out Component

const UserSignOut = () => {

    // Use Context

    const { dataManager } = useContext(APIContext);

    // Sign Out

    useEffect(() => dataManager.signOut(), [dataManager]);

    // Redirect User To The Home Page

    return <Redirect to="/" />

}

// Export Component

export default UserSignOut;