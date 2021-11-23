import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UseAuth from '../../firebase/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = UseAuth();
    if (loading) return 'loading';
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;