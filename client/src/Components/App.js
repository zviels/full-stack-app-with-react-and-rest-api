import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { APIProvider } from '../Context';

import Header from './Header';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import UserSignOut from './UserSignOut';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
import Forbidden from './Forbidden';
import UnhandledError from './UnhandledError';

// The App Component

const App = () => {

    return (

        <APIProvider>
            <BrowserRouter>
                <Header />
                <main>
                    <Switch>
                        <Route key="all-courses" exact path="/">
                            <Courses />
                        </Route>
                        <Route path="/signup">
                            <UserSignUp />
                        </Route>
                        <Route path="/signin">
                            <UserSignIn />
                        </Route>
                        <Route path="/signout">
                            <UserSignOut />
                        </Route>
                        <PrivateRoute key="user-courses" path="/your-courses" component= { Courses } />
                        <PrivateRoute path="/courses/create" component= { CreateCourse } />
                        <Route exact path="/courses/:id">
                            <CourseDetail />
                        </Route>
                        <PrivateRoute path="/courses/:id/update" component= { UpdateCourse } />
                        <Route path="/notfound">
                            <NotFound />
                        </Route>
                        <Route path="/forbidden">
                            <Forbidden />
                        </Route>
                        <Route path="/error">
                            <UnhandledError />
                        </Route>
                        <Redirect to="/notfound" />
                    </Switch>
                </main>
            </BrowserRouter>
        </APIProvider>

    );

}

// Export App

export default App;