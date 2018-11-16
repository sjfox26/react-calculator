import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

CalcButton.propTypes = {
    clicked: PropTypes.func,
    val: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool
};

export default CalcButton;