import React, {Component} from 'react';
import Style from "./LeftMenu.module.css"

class LeftMenu extends Component {
    render() {
        return (
            <div className={`${Style.leftMenu} ${this.props.isMenuOpen? Style.openMenu : Style.CloseMenu }`}>
                {/*<div id="mySidenav" className={Style.sidenav}>*/}
                {/*    <span className="closebtn" onClick="closeNav()">&times;</span>*/}
                {/*    <span>About</span>*/}
                {/*    <span>Services</span>*/}
                {/*    <span>Clients</span>*/}
                {/*    <span>Contact</span>*/}
                {/*</div>*/}
                <div>
                    <ul>
                        <li>hwllo</li>
                        <li>hwllo</li>
                        <li>hwllo</li>
                        <li>hwllo</li>
                        <li>hwllo</li>
                        <li>hwllo</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LeftMenu;