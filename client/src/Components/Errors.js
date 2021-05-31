import React from 'react';

// The Errors Component

const Errors = ({ errors }) => {

    // renderErrors

    const renderErrors = () => errors.map((error, index) => <li key= { index }>{ error }</li>);

    // JSX

    return (

        <div className="validation--errors">
            <h3>Errors</h3>
            <ul>
                { renderErrors() }
            </ul>
        </div>

    );

}

// Export The Errors Component

export default Errors;