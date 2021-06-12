import React from 'react';

// The Modal Component

const Modal = ({ show, deleteCourse }) => {

    // JSX

    return (

        <div className="modal-container">
            <div className="modal-box">
                <span id="close-button" className="close-button" onClick= { () => show(false) }>&times;</span>
                <p>Do You Really Want To Delete This Course?</p>
                <p>This Action Cannot Be Undone.</p>
                <div className="deletion-form">
                    <button id="delete-button" className="button delete-button" onClick= { deleteCourse }>Yes</button>
                    <button id="cancel-button" onClick= { () => show(false) } className="button cancel-button">No</button>
                </div>
            </div>
        </div>

    );

}

// Export Modal

export default Modal;