import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { APIContext } from '../Context';

// The Header Component

const Header = () => {

    // Use Context To Extract Required Data About The Authenticated User

    const { authenticatedUser } = useContext(APIContext);

    // Decide Which UL Element To Display
    // If The User Is Logged In - Display The 'Signed In' Header

    const ul = authenticatedUser ? 
    
    <ul className="header--signedin">
        <li>Welcome, { authenticatedUser.firstName + ' ' + authenticatedUser.lastName }!</li>
        <li>
            <Link to="/signout">Sign Out</Link>
        </li>
    </ul>

    // If The User Is Not Logged In - Display The 'Signed Out' Header

    :

    <ul className="header--signedout">
        <li>
            <Link to="/signup">Sign Up</Link>
        </li>
        <li>
            <Link to="/signin">Sign In</Link>
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