import React from 'react';
import { BrowserRouter as Routers, Route, Switch} from  'react-router-dom';
import routesData from "./routes/RoutesData";

function App() {
  return (
      <div>
          <Routers>
              <Switch>
                  {
                      routesData.map((route, index) => {
                          return (<Route key={index} {...route} />)
                      })
                  }
              </Switch>
          </Routers>
          <div className="row">
              <div className="col-6">
                  <h1>hello</h1>
              </div>
              <div className="col-6">
                  <h1>world</h1>
              </div>
          </div>
      </div>
  );
}

export default App;
