import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { APIContext } from '../Context';
import change from '../Functions/change';
import extractMessages from '../Functions/extractMessages';
import redirectBasedOnError from '../Functions/redirectBasedOnError';

import Errors from './Errors';

// The Sign Up Component

const UserSignUp = () => {

    // Initialize State

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // Use Context To Extract The Useful Functions Of The Data Manager

    const { dataManager, authenticatedUser } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Use Effect

    useEffect(() => {

        if (authenticatedUser)
            history.push('/');

    }, []);

    // Helper Functions

    // Submit
    // The Purpose Of This Function Is To Insert A New User Into The Database

    const submit = async (event) => {

        // Prevent The Default Behavior Of The Browser When Submitting The Form

        event.preventDefault();

        // If The Two Passwords Entered By The User Do Not Match - Display An Error Message

        if (password !== confirmedPassword)
            return setErrors([ 'The Two Passwords You Provided Do Not Match.' ]);

        // Gather The Data About The New User

        const newUser = { firstName, lastName, emailAddress, password };

        try {

            // Try To Insert The New User Into The Database

            await dataManager.signUp(newUser);

            // Authenticate The User

            await dataManager.signIn({ emailAddress, password });

            // Redirect The User To The Home Page

            history.push('/');

        } catch (error) {
            
            // Try To Extract The Response Object From The Error Object

            const errorMessages = extractMessages(error);

            // If The Response Object Exists, And Its Status Code Is 500 - Navigate The User To The 'Error' Page

            if (errorMessages)
                setErrors(errorMessages);

            // In Any Other Case, Display An Error Message On The Screen

            else
                redirectBasedOnError(history, error);    

        }

    }

    // See If There Are Error Messages To Be Displayed

    const errorMessages = errors.length > 0 ? <Errors errors= { errors } /> : null;

    // JSX

    return (

        <div className="form--centered">
            { errorMessages }
            <h2>Sign Up</h2>
            <form onSubmit= { submit }>
                <label htmlFor="firstName">
                    First Name
                </label>
                <input id="firstName" name="firstName" type="text" value={ firstName } onChange= { (event) => change(event, setFirstName) } />
                <label htmlFor="lastName">
                    Last Name
                </label>
                <input id="lastName" name="lastName" type="text" value={ lastName } onChange= { (event) => change(event, setLastName) } />
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value={ emailAddress } onChange= { (event) => change(event, setEmailAddress) } />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" value={ password } onChange= { (event) => change(event, setPassword) } />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" value= { confirmedPassword } onChange= { (event) => change(event, setConfirmedPassword) } />
                <button className="button" type="submit">Sign Up</button>
                <button className="button button-secondary" onClick={ () => history.push('/') }>Cancel</button>
            </form>
            <p>Already Have A User Account? Click Here To <Link to="/signin">Sign In</Link>!</p>
        </div>

    );

}

// Export Component

export default UserSignUp;