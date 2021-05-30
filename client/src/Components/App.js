import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { APIProvider } from '../Context';

import Header from './Header';
import Courses from './Courses';
import CourseDetail from './CourseDetail';

// The App Component

const App = () => {

    return (

        <APIProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Courses />
                    </Route>
                    <Route path="/courses/:id">
                        <CourseDetail />
                    </Route>
                </Switch>
            </BrowserRouter>
        </APIProvider>

    );

}

// Export App

export default App;