import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({ children, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={({ products }) =>
                !user.displayName ? (
                    children
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    )
}

export default PublicRoute
