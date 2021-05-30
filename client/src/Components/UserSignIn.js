import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { APIContext } from '../Context';

// The Sign In Form

const UserSignIn = () => {

    // Initialize State

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Use The API Context

    const { dataManager } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Helper Functions

    // Cancel

    const cancel = () => history.push('/');

    // Submit

    const submit = async (event) => {

        event.preventDefault();

        const data = await dataManager.signIn({ email, password });
        console.log(data);

    }

    // JSX

    return (

        <div className="form--centered">
            <h2>Sign In</h2>
            <form onSubmit= { submit }>
                <label htmlFor="emailAddress">
                    Email Address
                </label>
                <input id="emailAddress" name="emailAddress" type="email" value= { email } onChange= { (e) => setEmail(e.target.value) } />
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
            <p>Don't Have A User Account? Click Here To <Link to="/sign-up">Sign Up!</Link></p>
        </div>

    );

}

// Export Component

export default UserSignIn;