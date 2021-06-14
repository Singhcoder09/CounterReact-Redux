import React from 'react';
import { connect } from 'react-redux';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' });
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <div className="counterDiv p-3 mb-2 bg-info text-white">
                    <span className="border p-2 m-2" >{this.props.count}</span>
                    <button onClick={this.decrement}className="m-2">-</button>
                    <button onClick={this.increment}className="m-2">+</button>
                    <button onClick={this.reset}className="m-2">Reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);