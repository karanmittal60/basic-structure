import React from 'react';
import Root from "./Root/Root";
import {Provider} from "react-redux";
import store from "./config/store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <Root/>
            </Provider>
        </div>
    );
}

export default App;
