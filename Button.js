/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
        <input type="submit" ref={this.props.buttonRef} value="Submit" />
    );
  }
}

Button.propTypes = {
    buttonRef: PropTypes.func
};

export default Button;
