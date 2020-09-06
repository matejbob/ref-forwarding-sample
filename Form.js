/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount() {
      console.log(`componentDidMount refButton = ${this.props.refButton}`);
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate refButton = ${this.props.refButton}`);
}

  render () {
    return(
        <form onSubmit={() => {console.log("submitted")}}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
    );
  }
}

Form.propTypes = {
    refButton: PropTypes.object
};

export default Form;
