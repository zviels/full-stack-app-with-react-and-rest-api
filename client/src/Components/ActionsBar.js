import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { APIContext } from '../Context';
import redirectBasedOnError from '../Functions/redirectBasedOnError';

// The Actions Bar Component

const ActionsBar = ({ courseDetails }) => {

    // Use Context

    const { dataManager, authenticatedUser } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Helper Functions

    // deleteCourse

    const deleteCourse = async () => {

        if (!(authenticatedUser))
            return history.push('/sign-in');

        try {

            if (authenticatedUser.id !== courseDetails.User.id)
                return history.push('/forbidden');

            await dataManager.deleteCourse(courseDetails.id);
            history.push('/');

        } catch (error) {

            redirectBasedOnError(history, error);

        }
        
    }

    // showAdminButtons

    const showAdminButtons = () => {
        
        if (authenticatedUser && authenticatedUser.id === courseDetails.User.id) {

            return (

                <Fragment>
                    <Link className="button" to={ "/courses/" + courseDetails.id + "/update" }>
                        Update Course
                    </Link>
                    <Link className="button" onClick= { deleteCourse } to="#">
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