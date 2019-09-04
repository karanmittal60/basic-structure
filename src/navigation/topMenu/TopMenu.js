import React, {Component} from 'react';
import Style from './TopMenu.module.css'
import routeRules from "../../routes/RouteRules";

class TopMenu extends Component {
    state = {
    showMenu: false,
    }
    toggleMenu = () => {
        console.log("==toggleMenu==");
        this.setState({
            toggleMenu: !this.state.toggleMenu
        });
    };

    componentDidMount() {
        console.log("==this.props==", this.props);
    }

    render() {
        let {toggleMenu} = this.state
        return (
            <div className={Style.topMenu}>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <span className="navbar-brand" onClick={() => {this.props.history.push(routeRules.dashboard)}}>Basic structure</span>
                    <button className="navbar-toggler" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={toggleMenu ? `collapse ` : 'navbar-collapse'}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => {this.props.history.push(routeRules.home)}}>Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => {this.props.history.push(routeRules.aboutUs)}}>About</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => {this.props.history.push(routeRules.contactUs)}}>Contact</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => {this.props.history.push(routeRules.projects)}}>projects</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenu;