// Import API

import API from './APIConfig';

// Import The 'handleAsyncOperation' Function

import handleAsyncOperation from './HandleAsyncOperation';

// Create The Class Of The Data Manager

class DataManager {

    // Methods

    // getCourses
    // This Function Returns A List Of Courses From The Database

    getCourses() {

        const f = handleAsyncOperation (async () => {

            const { data } = await API.get('/courses');
            return data;

        });

        return f();

    }

    // getCourse
    // This Function Returns A Specific Course From The Database

    getCourse(id) {

        const f = handleAsyncOperation (async (id) => {

            const { data } = await API.get('/courses/' + id);
            return data;

        });

        return f(id);
        
    }

    // signUp
    // This Function Inserts A New User Into The Database

    signUp(user) {

        const f = handleAsyncOperation (async (user) => {

            const { data } = await API.post('/users', user);
            return data;

        });

        return f(user);

    }

}

// Export The Data Manager

export default DataManager;