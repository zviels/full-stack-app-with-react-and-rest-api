import { useState, useEffect } from 'react';

// The 'useFetch' Custom Hook
// Fetch Data (Data Doesn't Have To Be Defined)

const useFetch = (fetch, data) => {

    // Use State

    const [isVisible, setIsVisible] = useState(true);

    // Use Effect

    useEffect(() => {

        // Fetch Data Only If The Component Is Visible

        if (isVisible)
            fetch(data);

        // Clean Up Function
        // If The Component Is No Longer Visible, Don't Attempt To Fetch Data

        return () => { setIsVisible(false) };

    }, [fetch, data, isVisible]);

}

// Export Hook

export default useFetch;