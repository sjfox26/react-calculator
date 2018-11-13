import React, { Component } from 'react';
import CalcDisplay from "../components/CalcDisplay";
import CalcButtons from "../components/CalcButtons";

class Calculator extends Component {
    render() {
        return (
            <div>
                <CalcDisplay/>
                <CalcButtons/>
            </div>
        );
    }
}

export default Calculator;