// handleAsyncOperation

const handleAsyncOperation = (callback) => {

    return async () => {

        try {

            return await callback();

        } catch (error) {

            console.error('An Error Occurred: ' + error);

        }

    }

}

// Export Function

export default handleAsyncOperation;