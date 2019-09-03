import React, {Fragment} from 'react';
import TopMenu from "../navigation/topMenu/TopMenu";
import LeftMenu from "../navigation/leftMenu/LeftMenu";
import Footer from "../navigation/footer/Footer";
import Style from './AppLayout.module.css'

function AppLayout (props){
    return (
        <Fragment>
            <TopMenu {...props}/>
            <div className={Style.appLayout}>
                {props.children}
            </div>
            <LeftMenu {...props}/>
            <Footer {...props}/>
        </Fragment>
    );
}

export default AppLayout;