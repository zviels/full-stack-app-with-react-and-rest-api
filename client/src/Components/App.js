import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { APIProvider } from '../Context';

import Header from './Header';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import UserSignOut from './UserSignOut';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import CreateCourse from './CreateCourse';
import PrivateRoute from './PrivateRoute';

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
                        <Route path="/sign-up">
                            <UserSignUp />
                        </Route>
                        <Route path="/sign-in">
                            <UserSignIn />
                        </Route>
                        <Route path="/sign-out">
                            <UserSignOut />
                        </Route>
                        <PrivateRoute path="/courses/create">
                            <CreateCourse />
                        </PrivateRoute>
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