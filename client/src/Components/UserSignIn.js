import React, { useState, useContext } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';

import { APIContext } from '../Context';

import Errors from './Errors';

// The Sign In Form

const UserSignIn = () => {

    // Initialize State

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [shouldBeRedirected, setShouldBeRedirected] = useState(false);
    const [errors, setErrors] = useState([]);

    // Use The API Context

    const { dataManager } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Use Location

    const location = useLocation();

    // Helper Functions

    // Cancel
    // This Function Navigates The User To The Home Page

    const cancel = () => history.push('/');

    // Submit
    // The Purpose Of This Function Is To Authenticate The User

    const submit = async (event) => {

        // Prevent The Default Behavior Of The Browser

        event.preventDefault();

        // If The User Didn't Enter An Email Address Or A Password - Display An Error Message

        if ((!(emailAddress)) || (!(password)))
            return setErrors([ 'Both Email & Password Are Required Fields.' ]);

        try { 

            // Try To Authenticate The User

            await dataManager.signIn({ emailAddress, password });

            // Redirect The User To The Previous Screen (Or To The Home Page)

            setShouldBeRedirected(true);

        } catch (error) {
            
            // Try To Extract The Response Object From The Error Object

            const { response } = error;

            // If The Response Object Exists, And Its Status Code Is 500 - Navigate The User To The 'Error' Page

            if (response && response.status === 500)
                history.push('/error');

            // In Any Other Case, Display An Error Message On The Screen
                
            else
                setErrors([ 'Sign In Was Unsuccessful.' ]);

        }
    
    }

    // Define Where To Redirect The User
    // If The User Was Redirected To The 'Sign In' Page, He'll Be Redirected Back To The Previous Screen After Successfuly Signing In

    const path = location.state ? location.state.from.pathname : '/';

    // If Everything Is Okay - Redirect The User

    if (shouldBeRedirected)
        return <Redirect to= { path } />

    // See If There Is An Error To Display

    const error = errors.length > 0 ? <Errors errors= { errors } /> : null;

    // JSX

    return (

        <div className="form--centered">
            <h2>Sign In</h2>
            { error }
            <form onSubmit= { submit }>
                <label htmlFor="emailAddress">
                    Email Address
                </label>
                <input id="emailAddress" name="emailAddress" type="email" value= { emailAddress } onChange= { (e) => setEmailAddress(e.target.value) } />
                <label htmlFor="password">
                    Password
                </label>
                <input id="password" name="password" type="password" value= { password} onChange= { (e) => setPassword(e.target.value) } />
                <button className="button" type="submit">
                    Sign In
                </button>
                <button className="button button-secondary" onClick= { cancel }>
                    Cancel
                </button>
            </form>
            <p>Don't Have A User Account? Click Here To <Link to="/signup">Sign Up</Link>!</p>
        </div>

    );

}

// Export Component

export default UserSignIn;