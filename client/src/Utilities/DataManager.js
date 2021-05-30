// Import API

import API from './APIConfig';

import handleAsyncOperation from './HandleAsyncOperation';

// Create The Class Of The Data Manager

class DataManager {

    // Methods

    // getCourses

    getCourses() {

        const f = handleAsyncOperation (async () => {

            const { data } = await API.get('/courses');
            return data;

        });

        return f();

    }

    // getCourse

    getCourse(id) {

        const f = handleAsyncOperation (async (id) => {

            const { data } = await API.get('/courses/' + id);
            return data;

        });

        return f(id);
        
    }

}

// Export The Data Manager

export default DataManager;