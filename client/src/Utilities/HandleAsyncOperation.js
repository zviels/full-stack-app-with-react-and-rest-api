// handleAsyncOperation
// This Function Receives A Callback Function, And Then Wraps It With Try & Catch

const handleAsyncOperation = (callback) => {

    return async (param) => {

        try {

            return await callback(param);

        } catch (error) {

            // I Should Try To Rewrite This Function, Because Right Now It's Not Really Dealing With Any Error
            
            throw error;

        }

    }

}

// Export Function

export default handleAsyncOperation;