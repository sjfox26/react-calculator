import React, { Component } from 'react';
import './CalcButton.css';

class CalcButton extends Component {
    handleClick = () => {
        this.props.clicked(this.props.val);
    }

    render() {
        const className = [
            "calc-button-component",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.val}</button>
            </div>

        );
    }
}

export default CalcButton;