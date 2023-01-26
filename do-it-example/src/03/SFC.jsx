import React from 'react';

const SFC = (props,context) => {

    const {somePropValue} = props;

    const {someContextValue} = context;
    return (
        <h1>Hello, {somePropValue}</h1>
    );
}
SFC.propTypes = {somePropValue: PropTypes.any};
SFC.defaultProps = {somePropaValue : 'default value'};



export default SFC;