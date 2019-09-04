import React from 'react';
import {Route, Redirect} from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import auth from './../auth/auth'

function  AppRoute ({component: Component, ...rest}){
    return (
        <Route
            {...rest}
            render={matchProps => {
                if (auth.isAuthenticated()) {
                    return (
                        <AppLayout {...matchProps} >
                            <Component {...matchProps} />
                        </AppLayout>
                    );
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    from: matchProps.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export default AppRoute;