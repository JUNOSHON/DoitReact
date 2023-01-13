import React, { Component } from 'react';

class LifecycleExample extends Component {
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps 호출');
        return {};
    }
    constructor(props) {
        super(props);
        this.state={};
        console.log('constructor 호출');
    }
    componentDidMount() {
        console.log('componentDidMount 호출');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate 호출');
    }
    component





    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifecycleExample;