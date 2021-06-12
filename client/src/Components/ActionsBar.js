import React, { Fragment, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { APIContext } from '../Context';
import redirectBasedOnError from '../Functions/redirectBasedOnError';

import Modal from './Modal';

// The Actions Bar Component

const ActionsBar = ({ courseDetails }) => {

    // Use State

    const [renderModal, setRenderModal] = useState(false);

    // Use Context To Extract Required Data

    const { dataManager, authenticatedUser } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Helper Functions

    // handleClick

    const handleClick = () => setRenderModal(true);

    // deleteCourse

    const deleteCourse = async () => {

        // If The User Is Not Logged In - Redirect Him To The 'Sign In' Page

        if (!(authenticatedUser))
            return history.push('/signin');

        try {

            // If The User Is Not The Creator Of The Course - Redirect Him To The 'Forbidden' Page

            if (authenticatedUser.id !== courseDetails.User.id)
                return history.push('/forbidden');
            
            // If The User Is Logged In & He Is The Creator Of The Course - Delete The Course

            await dataManager.deleteCourse(courseDetails.id);

            // Redirect The User To The Home Page

            history.push('/');

        } catch (error) {

            // If An Error Occurred, Handle It Using The 'History' Variable, Based On The Caught Error

            redirectBasedOnError(history, error);

        }
        
    }

    // Modal

    const modal = renderModal ? <Modal show= { setRenderModal } deleteCourse= { deleteCourse } /> : null;

    // showAdminButtons
    // Display The 'Update Course' & 'Delete Course' Buttons Only If The User Is Logged In, And He Is The Creator Of The Course

    const showAdminButtons = () => {
        
        if (authenticatedUser && authenticatedUser.id === courseDetails.User.id) {

            return (

                <Fragment>
                    { modal }
                    <Link className="button" to={ "/courses/" + courseDetails.id + "/update" }>
                        Update Course
                    </Link>
                    <Link className="button" onClick= { handleClick } to="#">
                        Delete Course
                    </Link>
                </Fragment>

            );

        }

        else
            return null;
        
    }

    // JSX

    return (

        <div className="actions--bar">
            <div className="wrap">
                { showAdminButtons() }
                <Link className="button button-secondary" to="/">
                    Return To List
                </Link>
            </div>
        </div>

    );

}

// Export The Actions Bar

export default ActionsBar;