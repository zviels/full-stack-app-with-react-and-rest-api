import React from 'react';
import { Link } from 'react-router-dom';

// The Actions Bar Component

const ActionsBar = ({ courseID }) => {

    return (

        <div className="actions--bar">
            <div className="wrap">
                <Link className="button" to={ "/courses/" + courseID + "/update" }>
                    Update Course
                </Link>
                <a className="button" href="#">
                    Delete Course
                </a>
                <Link className="button button-secondary" to="/">
                    Return To List
                </Link>
            </div>
        </div>

    );

}

// Export The Actions Bar

export default ActionsBar;