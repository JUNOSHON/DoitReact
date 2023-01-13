import React, { Component } from 'react'
import PropsTypes from 'prop-types';

export default class ChildComponent extends Component {
  render() {

    const {
        boolValue,
        numValue,
        arrayValue,
        nodeValue,
        funcValue,
    } = this.props;
    return (
      <div>ChildComponent</div>
    )
  }
}
