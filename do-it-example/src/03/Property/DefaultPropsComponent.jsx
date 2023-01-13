import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
    render() {
        let message1 = '';
        if(this.props.boolValue === false) {
            message1 = 'boolValue 기본값이 false 입니다';
        }
        let message2= '';
        if(this.props.boolValueWithoutDefault === false) {
            message2 = '';
            if(this.props.boolValueWithoutDefault === false) {
                message2 = 'boolValueDefault 기본값이 false 입니다.';
            }
        }
        return (
            <div className='message-comtainer'>
                    {message1}
                    {message2}

            </div>
        );
    }
}


export default DefaultPropsComponent;