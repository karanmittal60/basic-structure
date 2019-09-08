import React, {Component, Fragment} from 'react';
import TopMenu from "../navigation/topMenu/TopMenu";
import LeftMenu from "../navigation/leftMenu/LeftMenu";
import Footer from "../navigation/footer/Footer";
import Style from './AppLayout.module.css'

class AppLayout extends Component{
    state = {
        openLeftMenu: true
    };

    openMenu = () => {
        this.setState({
            openLeftMenu: !this.state.openLeftMenu
        });
    };
    render() {
        return (
            <Fragment>
                <TopMenu {...this.props}/>
                <div className={Style.maincontainer}>
                    <div className={Style.leftcontainer}>
                        <LeftMenu {...this.props} isMenuOpen={this.state.openLeftMenu }/>
                        <div className={this.state.openLeftMenu ? Style.contentcontainerOpen : Style.contentcontainerClosed}>
                            {this.props.children}
                            <button onClick={this.openMenu}>side menu</button>
                        </div>
                    </div>
                </div>
                <Footer {...this.props}/>
            </Fragment>
        );
    }
}

export default AppLayout;