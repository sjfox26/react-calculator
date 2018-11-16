import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CalcDisplay.css';

class CalcDisplay extends Component {
    render() {
        return (
            <div className="display-component">
                <div>{this.props.value}</div>
            </div>
        );
    }
}

CalcDisplay.propTypes = {
  value: PropTypes.string
};

export default CalcDisplay;