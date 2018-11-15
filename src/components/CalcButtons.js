import React, { Component } from 'react';
import CalcButton from "./CalcButton";

class CalcButtons extends Component {
    render() {
        return (
            <div>
                <CalcButton clicked={this.props.clicked} val={"0"}/>
                <CalcButton clicked={this.props.clicked} val={"1"}/>
                <CalcButton clicked={this.props.clicked} val={"2"}/>
                <CalcButton clicked={this.props.clicked} val={"3"}/>
                <CalcButton clicked={this.props.clicked} val={"4"}/>
                <CalcButton clicked={this.props.clicked} val={"5"}/>
                <CalcButton clicked={this.props.clicked} val={"6"}/>
                <CalcButton clicked={this.props.clicked} val={"7"}/>
                <CalcButton clicked={this.props.clicked} val={"8"}/>
                <CalcButton clicked={this.props.clicked} val={"9"}/>
                <CalcButton clicked={this.props.clicked} val={"C"}/>
                <CalcButton clicked={this.props.clicked} val={"+"}/>
                <CalcButton clicked={this.props.clicked} val={"-"}/>
                <CalcButton clicked={this.props.clicked} val={"/"}/>
                <CalcButton clicked={this.props.clicked} val={"*"}/>
                <CalcButton clicked={this.props.clicked} val={"="}/>
            </div>
        );
    }
}

export default CalcButtons;