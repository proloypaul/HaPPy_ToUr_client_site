import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoadign} = useAuth()

    if(isLoadign){
        return <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    return (
        <Route
        {...rest}
        render = {({location}) => user?.email ? children:<Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        ></Redirect> }
        >

        </Route>
    );
};

export default PrivateRoute;