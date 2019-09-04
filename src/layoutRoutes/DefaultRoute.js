import React from 'react';
import {Route} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

function  DefaultRoute ({component: Component, ...rest}){
    return (

        <Route
            {...rest}
            render={matchProps => {
                return (
                    <DefaultLayout {...matchProps}>
                        <Component {...matchProps} />
                    </DefaultLayout>
                );
            }}
        />

    );
}

export default DefaultRoute;