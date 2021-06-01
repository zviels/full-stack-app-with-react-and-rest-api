// extractMessages
// This Function Receives An Error Object & Returns Error Messages

const extractMessages = (error) => {

    const { response } = error;
    const { data } = response;
    const { errorMessages } = data;

    return errorMessages;

}

// Export Function

export default extractMessages;