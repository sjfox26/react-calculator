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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        val: state.displayValue,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCalcButtonClicked: (v) => dispatch({type: actionTypes.INCREMENT, payload: v})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);