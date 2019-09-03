import React, {Component} from 'react';
import Style from "./LeftMenu.module.css"

class LeftMenu extends Component {
    render() {
        return (
            <div className={Style.leftMenu}>
                <h1>LeftMenu</h1>
            </div>
        );
    }
}

export default LeftMenu;