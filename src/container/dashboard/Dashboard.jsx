import React, {Component} from 'react';
import Modal from "../../components/modal";

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }
    render() {
        return (
            <div>
               <h1>Dashboard</h1>
               <h1>Dashboard</h1>
               <h1>Dashboard</h1>
               <h1>Dashboard</h1>
                <Modal hidePopup={this.hidePopup} show={this.state.show}>
                    <h1>hello world</h1>
                </Modal>
                <button onClick={this.hidePopup}>show</button>
            </div>
        );
    }

    hidePopup = () => {
        this.setState(prev=> {
            return {
                show: !prev.show,
            }
        })
    }
}

export default Dashboard;