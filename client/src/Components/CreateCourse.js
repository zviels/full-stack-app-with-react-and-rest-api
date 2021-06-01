import React from 'react';

import Errors from './Errors';

// The 'Create Course' Component

const CreateCourse = () => {

    return (

        <div className="wrap">
            <h2>Create Course</h2>
            {/* { errors } */}   
            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">
                            Course Title
                        </label>
                        <input id="courseTitle" name="courseTitle" type="text" value="" />
                        <p>By Joe Smith</p>
                        <label htmlFor="courseDescription">
                            Course Description
                        </label>
                        <textarea id="courseDescription" name="courseDescription"></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">
                            Estimated Time
                        </label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value="" />
                        <label htmlFor="materialsNeeded">
                            Materials Needed
                        </label>
                        <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                    </div>
                </div>
                <button className="button" type="submit">
                    Create Course
                </button>
                <button className="button button-secondary" onClick="">
                    Cancel
                </button>
            </form>
        </div>

    );

}

// Export Component

export default CreateCourse;