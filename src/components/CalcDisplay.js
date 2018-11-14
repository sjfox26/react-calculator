import React, { Component } from 'react';

class CalcDisplay extends Component {
    render() {
        return (
            <div>
                I'm the Display! {this.props.value}
            </div>
        );
    }
}

export default CalcDisplay;