import React, {Component} from 'react';
import TopMenu from "../../navigation/topMenu/TopMenu";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <TopMenu/>
               <h1>Dashboard</h1>
            </div>
        );
    }
}

export default Dashboard;