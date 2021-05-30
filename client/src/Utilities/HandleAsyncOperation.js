// handleAsyncOperation

const handleAsyncOperation = (callback) => {

    return async (param) => {

        try {

            return await callback(param);

        } catch (error) {

            console.error('An Error Occurred: ' + error);

        }

    }

}

// Export Function

export default handleAsyncOperation;