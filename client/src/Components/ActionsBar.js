import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { APIContext } from '../Context';

// The Actions Bar Component

const ActionsBar = ({ courseID }) => {

    // Use Context

    const { dataManager } = useContext(APIContext);

    // Use History

    const history = useHistory();

    // Helper Functions

    // deleteCourse

    const deleteCourse = async () => {

        await dataManager.deleteCourse(courseID);
        history.push('/');
        
    }

    // JSX

    return (

        <div className="actions--bar">
            <div className="wrap">
                <Link className="button" to={ "/courses/" + courseID + "/update" }>
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