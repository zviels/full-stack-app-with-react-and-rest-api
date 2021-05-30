// Import ReactDOM

import ReactDOM from 'react-dom';

// Import The API Provider

import { APIProvider } from './Context';

// Import Components

import App from './Components/App';

// Render The App

ReactDOM.render(

    <APIProvider>
        <App />
    </APIProvider>,

     document.querySelector('#root'));