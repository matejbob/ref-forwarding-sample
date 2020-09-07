/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

import Form from "./Form";
import Button from "./Button";

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.refButton = null;
    this.state = {refButton: null};

    this.setButtonRef = this.setButtonRef.bind(this);
  }

  componentDidMount() {
    this.setState({refButton: this.refButton});
  }

  setButtonRef(ref) {
    this.refButton = ref;
  }


  render () {
    return(
      <div>
        <Form refButton={this.state.refButton} />
        <Button buttonRef={this.setButtonRef} onSubmit={() => {console.log(`INFO: button clicked at ${new Date()}`)}} />
      </div>
    );
  }
}

Screen.propTypes = {};

export default Screen;
