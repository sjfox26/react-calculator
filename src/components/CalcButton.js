import React, { Component } from 'react';

class CalcButton extends Component {
    handleClick = () => {
        this.props.clicked(this.props.val);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                Button {this.props.val}
            </div>
        );
    }
}

export default CalcButton;