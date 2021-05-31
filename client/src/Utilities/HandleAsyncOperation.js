// handleAsyncOperation

const handleAsyncOperation = (callback) => {

    return async (param) => {

        try {

            return await callback(param);

        } catch (error) {
            
            console.error(error);

            if (typeof param === 'object')
                throw error;
                
            // For Sign In, Get The Error Message From The API With 'Error.Response.Data.ErrorMessage'

        }

    }

}

// Export Function

export default handleAsyncOperation;