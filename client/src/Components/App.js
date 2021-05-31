import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { APIProvider } from '../Context';

import Header from './Header';
import UserSignIn from './UserSignIn';
import UserSignOut from './UserSignOut';
import Courses from './Courses';
import CourseDetail from './CourseDetail';

// The App Component

const App = () => {

    return (

        <APIProvider>
            <BrowserRouter>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Courses />
                        </Route>
                        <Route path="/sign-in">
                            <UserSignIn />
                        </Route>
                        <Route path="/sign-out">
                            <UserSignOut />
                        </Route>
                        <Route path="/courses/:id">
                            <CourseDetail />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </APIProvider>

    );

}

// Export App

export default App;