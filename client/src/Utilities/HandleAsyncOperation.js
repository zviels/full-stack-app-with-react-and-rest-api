// handleAsyncOperation

const handleAsyncOperation = (callback) => {

    return async (param) => {

        try {

            return await callback(param);

        } catch (error) {
            
            throw error;

            // For Sign In & Sign Up, Get The Error Message From The API With 'Error.Response.Data.ErrorMessage'

        }

    }

}

// Export Function

export default handleAsyncOperation;