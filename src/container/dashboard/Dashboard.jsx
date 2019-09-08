import React, {Component} from 'react';
import {connect} from "react-redux";
import {oneMinus, onePlus, addToList} from "./actions";
import {bindActionCreators} from "redux";

class Dashboard extends Component {

    state = {
        todoText: "",
        count: 0
    };

    handleInputChanage = ({target}) => {
        // console.log("==target==", target);
        this.setState({
            [target.name]: target.value
        });
    };

    addToList = () => {
        console.log("==addToList==",this.state.todoText);
        this.props.addToList(this.state.todoText)
    };

    onePlus = () => {
        // console.log("==onePlus==");
        this.setState({
            count: this.state.count+1
        });
        this.props.onePlus(this.props.number)
    };

    oneMinus = () => {
        // console.log("==oneMinus==");
        this.setState({
            count: this.state.count-1
        });
        this.props.oneMinus(this.props.number)
    };

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.addToList}>
                        <input type="text" name="todoText" value={this.state.todoText} onChange={this.handleInputChanage}/>
                        <button onClick={this.addToList}>Add</button>
                    </form>
                </div>
                <ul>
                    {
                        this.props.todo.map((list, index) => {
                            return <li key={index}> {list.text}</li>
                        })
                    }
                </ul>
                <div>
                    <h1>local state {this.state.count}</h1>
                    <h1>redux state {this.props.number}</h1>
                    <button onClick={this.onePlus}>+</button>
                    <button onClick={this.oneMinus}>-</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("==mapStateToProps dashboard==", state);
    return {
        number: state.dashboardReducer.number,
        todo: state.dashboardReducer.todo,
    }
};

function mapDispatchToProps (dispatch) {
    // console.log("==mapDispatchToProps dashboard==",dispatch);
    return bindActionCreators({
        onePlus,
        oneMinus,
        addToList
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);