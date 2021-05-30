// handleAsyncOperation

const handleAsyncOperation = (callback) => {

    return async (id) => {

        try {

            return await callback(id);

        } catch (error) {

            console.error('An Error Occurred: ' + error);

        }

    }

}

// Export Function

export default handleAsyncOperation;