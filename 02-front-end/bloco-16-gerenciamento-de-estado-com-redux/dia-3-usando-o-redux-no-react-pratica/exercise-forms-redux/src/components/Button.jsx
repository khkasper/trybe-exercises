import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
