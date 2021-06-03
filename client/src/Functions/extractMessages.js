// extractMessages
// This Function Receives An Error Object & Extracts Error Messages From It

const extractMessages = (error) => {

    const { response } = error;
    const { data } = response;
    const { errorMessages } = data;

    return errorMessages;

}

// Export Function

export default extractMessages;