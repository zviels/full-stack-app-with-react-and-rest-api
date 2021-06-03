// extractStatus
// This Function Receives An Error Object & Returns The Status Code Of That Error

const extractStatus = (error) => {

    const { response } = error;
    const { status } = response;

    return status;

}

// Export Function

export default extractStatus;