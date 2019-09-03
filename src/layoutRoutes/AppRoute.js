import React from 'react';
import {Route, Redirect} from "react-router-dom";
import AppLayout from "../layout/AppLayout";

function  AppRoute ({component: Component, ...rest}){
    return (
        <Route
            {...rest}
            render ={matchProps => {
                if (true) {
                    return (
                        <AppLayout {...matchProps}>
                            <Component {...matchProps}/>
                        </AppLayout>
                    )
                } else {
                    return (
                        <Redirect
                            to={{
                                path:'/',
                                state:{
                                    from: matchProps.location
                                }
                            }}
                        />
                    )
                }
            }}
        />
    );
}

export default AppRoute;