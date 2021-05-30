import React from 'react';
import { Link } from 'react-router-dom';

// The Header Component

const Header = () => {

    return (

        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo">
                    <a href="/">Courses</a>
                </h1>
                <nav>
                    <ul className="header--signedout">
                        <li>
                            <a href="/sign-up">Sign Up</a>
                        </li>
                        <li>
                            <Link to="/sign-in">Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );

}

// Export Header

export default Header;