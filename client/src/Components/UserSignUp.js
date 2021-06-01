import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { APIContext } from '../Context';
import change from '../Functions/change';
import extractMessages from '../Functions/extractMessages';

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

    // Use Context

    const { dataManager } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Helper Functions

    // Submit

    const submit = async (event) => {

        event.preventDefault();

        if (password !== confirmedPassword)
            return setErrors([ 'The Two Passwords You Provided Do Not Match.' ]);

        const newUser = { firstName, lastName, emailAddress, password };

        try {

            await dataManager.signUp(newUser);
            await dataManager.signIn({ emailAddress, password });
            history.push('/');

        } catch (error) {
            
            const errorMessages = extractMessages(error);
            setErrors(errorMessages);

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
            <p>Already Have A User Account? Click Here To <Link to="/sign-in">Sign In</Link>!</p>
        </div>

    );

}

// Export Component

export default UserSignUp;