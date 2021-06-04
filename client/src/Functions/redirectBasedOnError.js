import extractStatus from "./extractStatus"

// This Function Deals With Different Types Of Errors

const redirectBasedOnError = (history, error) => {

    const status = extractStatus(error);

    switch (status) {

        // If The Status Is 404, Navigate The User To The 'Not Found' Page

        case 404: history.push('/notfound');
                  break;

        // By Default, Navigate The User To The 'Error' Page          

        default: history.push('/error');          

    }

}

// Export Function

export default redirectBasedOnError;