import React from 'react';
import { BrowserRouter as Routers, Route, Switch, Redirect} from  'react-router-dom';
import routesData from "./routes/RoutesData";
import routeRules from "./routes/RouteRules";
import AppRoute from "./layoutRoutes/AppRoute";
import DefaultRoute from "./layoutRoutes/DefaultRoute";

function App() {
    return (
        <div>
            <Routers>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={routeRules.signIn} />
                    </Route>
                    {
                        routesData.map((route, index) => {
                            console.log("==route==", route.auth);
                            if (route.auth) {
                                return (<AppRoute key={index} {...route} />)
                            } else {
                                return (<DefaultRoute key={index} {...route} />)
                            }
                        })
                    }
                </Switch>
            </Routers>
        </div>
    );
}

export default App;
