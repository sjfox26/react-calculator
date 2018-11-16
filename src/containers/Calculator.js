import React, { Component } from 'react';
import { connect } from 'react-redux';

import CalcDisplay from "../components/CalcDisplay";
import CalcButtons from "../components/CalcButtons";
import * as actionTypes from '../store/actions/index';
import './Calculator.css';

class Calculator extends Component {

    render() {
        return (
            <div className="calculator-component">
                <CalcDisplay value={this.props.val}/>
                <CalcButtons clicked={this.props.onCalcButtonClicked}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        val: state.displayValue,
        firstNum: state.firstNumber,
        op: state.operation
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCalcButtonClicked: (v) => dispatch({type: actionTypes.TO_DISPLAY, payload: v})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);