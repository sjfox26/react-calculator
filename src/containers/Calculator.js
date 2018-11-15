import React, { Component } from 'react';
import CalcDisplay from "../components/CalcDisplay";
import CalcButtons from "../components/CalcButtons";
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/index';

class Calculator extends Component {

    render() {
        return (
            <div>
                <CalcDisplay value={this.props.val}/>
                <CalcButtons clicked={this.props.onCalcButtonClicked}/>
                <hr/>
                <p>First Number: {this.props.firstNum}</p>
                <p>Operation: {this.props.op}</p>
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