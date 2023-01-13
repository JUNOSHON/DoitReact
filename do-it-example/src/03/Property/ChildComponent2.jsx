import React, { Component } from 'react'

export default class ChildComponent2 extends Component {
  render() {
    const {
        objValue,
    } = this.props;

    return (
      <div>
        <div>객체 값: {String(Object.entries(objValue))}</div>
        <div>필수 값: {requiredStringValue}</div>
      </div>
    );

  }
}
/*
ChildComponent2.prototype= {
    objValue : PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }),
    requiredStringValue: PropsTypes.string.isrequierd,
}
*/