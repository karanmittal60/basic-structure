import React, {Component} from 'react';
import Style from './Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div className={Style.footer}>
                <span>Copyright © 2019 by Karan Mittal </span>
            </div>
        );
    }
}

export default Footer;