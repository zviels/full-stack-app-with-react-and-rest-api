// Import Axios

import axios from 'axios';

// Create A New Instance Of Axios

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

// Export API

export default api;