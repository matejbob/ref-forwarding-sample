/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
        <input type="submit" ref={this.props.buttonRef} value="Submit" onClick={this.props.onSubmit} />
    );
  }
}

Button.propTypes = {
    buttonRef: PropTypes.func,
    onSubmit: PropTypes.func
};

export default Button;
