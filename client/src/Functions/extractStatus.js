// extractStatus
// This Function Receives An Error Object & Returns A Status Code

const extractStatus = (error) => {

    const { response } = error;
    const { status } = response;

    return status;

}

// Export Function

export default extractStatus;