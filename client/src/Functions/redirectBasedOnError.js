import extractStatus from "./extractStatus"

// This Function Deals With Different Types Of Errors

const redirectBasedOnError = (history, error) => {

    const status = extractStatus(error);

    switch (status) {

        case 404: history.push('/not-found');
                  break;

        default: history.push('/error');          

    }

}

// Export Function

export default redirectBasedOnError;