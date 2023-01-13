import React, { Component } from 'react'
import PropsTypes from 'prop-types';

export default class ChildComponent extends Component {
  render() {

    const {
        boolValue,
        numValue,
        objValue,
        arrayValue,
        nodeValue,
        funcValue,
    } = this.props;
    
    return (
      <div>
          <span> 불리언 값 : {boolValue} </span>
          <span> 불리언 값 : {numValue} </span>
          <span> 불리언 값 : {arrayValue} </span>
          <span> 불리언 값 : {String(objValue)} </span>
          <span> 불리언 값 : {nodeValue} </span>
          <span> 불리언 값 : {String(funcValue)} </span>
      </div>
    );
  }
}
/*
ChildComponent.PropsTypes = {
  boolValueL PropsTypes.bool,
  numValue:PropsTypes.number,
}*/