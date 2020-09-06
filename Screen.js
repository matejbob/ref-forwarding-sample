/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

import Form from "./Form";
import Button from "./Button";

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.refButton = null;
    // this.state = {value: ''};
    this.state = {refButton: null};

    // this.handleChange = this.handleChange.bind(this);
    this.setButtonRef = this.setButtonRef.bind(this);
    // this.updateButtonState = this.updateButtonState.bind(this);
  }

  componentDidMount() {
    // this.updateButtonState();
    this.setState({refButton: this.refButton});
  }

  handleChange(event) {
    // this.setState({value: event.target.value}, () => {
    //   this.updateButtonState();
    // });
  }

  setButtonRef(ref) {
    this.refButton = ref;
  }

  // updateButtonState() {
  //   this.refButton.disabled = (!this.state.value ? true : false);
  // }

  render () {
    return(
      <div>
        <Form refButton={this.state.refButton} />
        {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        <Button buttonRef={this.setButtonRef} />
      </div>
    );
  }
}

Screen.propTypes = {};

export default Screen;
