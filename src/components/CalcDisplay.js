import React, { Component } from 'react';
import './CalcDisplay.css';

class CalcDisplay extends Component {
    render() {
        return (
            <div className="display-component">
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default CalcDisplay;