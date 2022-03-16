import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserLogin } from './UserLogin';

const PrivateRoute = ({component: element, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            UserLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};


export default PrivateRoute;