import React from 'react';
import { Link } from 'react-router-dom';

// The Actions Bar Component

const ActionsBar = () => {

    return (

        <div className="actions--bar">
            <div className="wrap">
                <a className="button" href="/update-course">
                    Update Course
                </a>
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