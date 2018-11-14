import React, { Component } from 'react';
import CalcButton from "./CalcButton";

class CalcButtons extends Component {
    render() {
        return (
            <div>
                <CalcButton clicked={this.props.clicked} val={1}/>
                <CalcButton clicked={this.props.clicked} val={2}/>
                <CalcButton clicked={this.props.clicked} val={3}/>
            </div>
        );
    }
}

export default CalcButtons;