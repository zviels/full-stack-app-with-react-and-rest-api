import React, { useContext } from 'react';
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

        try {

            if (authenticatedUser.id !== courseDetails.User.id)
                return history.push('/forbidden');

            await dataManager.deleteCourse(courseDetails.id);
            history.push('/');

        } catch (error) {

            redirectBasedOnError(history, error);

        }
        
    }

    // JSX

    return (

        <div className="actions--bar">
            <div className="wrap">
                <Link className="button" to={ "/courses/" + courseDetails.id + "/update" }>
                    Update Course
                </Link>
                <Link className="button" onClick= { deleteCourse } to="#">
                    Delete Course
                </Link>
                <Link className="button button-secondary" to="/">
                    Return To List
                </Link>
            </div>
        </div>

    );

}

// Export The Actions Bar

export default ActionsBar;