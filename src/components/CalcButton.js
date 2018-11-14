import React, { Component } from 'react';

class CalcButton extends Component {
    handleClick = () => {
        this.props.clicked();
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                Button
            </div>
        );
    }
}

export default CalcButton;