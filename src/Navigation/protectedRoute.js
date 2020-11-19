import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../Utils/User';

const ProtectedRoute = ({ component: RouteComponent, condition,...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps =>
                condition ? (
                    <RouteComponent {...routeProps} />
                ) : (
                        <Redirect to={'/signin'} />
                    )}
        />
    );
};
export default ProtectedRoute;