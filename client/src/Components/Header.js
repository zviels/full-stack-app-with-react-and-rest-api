import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { APIContext } from '../Context';

// The Header Component

const Header = () => {

    // Use Context

    const { authenticatedUser } = useContext(APIContext);

    // Decide Which UL Element To Display

    const ul = authenticatedUser ? 
    
    <ul className="header--signedin">
        <li>Welcome, { authenticatedUser.firstName + ' ' + authenticatedUser.lastName }!</li>
        <li>
            <Link to="/sign-out">Sign Out</Link>
        </li>
    </ul>

    :

    <ul className="header--signedout">
        <li>
            <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
            <Link to="/sign-in">Sign In</Link>
        </li>
    </ul>

    // JSX

    return (

        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo">
                    <Link to="/">Courses</Link>
                </h1>
                <nav>
                    { ul }
                </nav>
            </div>
        </header>

    );

}

// Export Header

export default Header;