import React, { Component } from 'react';
import CalcButton from "./CalcButton";

class CalcButtons extends Component {
    render() {
        return (
            <div>
                <CalcButton/>
                <CalcButton/>
                <CalcButton/>
            </div>
        );
    }
}

export default CalcButtons;