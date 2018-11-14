import React, { Component } from 'react';
import CalcButton from "./CalcButton";

class CalcButtons extends Component {
    render() {
        return (
            <div>
                <CalcButton/>
                <CalcButton/>
                <CalcButton clicked={this.props.clicked}/>
            </div>
        );
    }
}

export default CalcButtons;