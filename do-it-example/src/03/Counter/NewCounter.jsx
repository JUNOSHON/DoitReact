import React, { Component } from 'react';

class NewCounter extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.increaseCount = this.increaseCount.bind(this);
    }
    
    static getDerivedStateFromProps(props, state){
        const {count} = props;
        return{ //프로퍼티에서 전달된 count 값을 보관
            count,
            newCount: count ===state.count
            //프로퍼티가 변경되지 않았으면 기존 state값으로 설정
                ? state.newCount
                :count,
        };
    }

    increaseCount(){
        this.setState(({newCount}) => ({
            newCount: newCount + 1
        }));
    }
    render() {
        return (
            <div>
                현재 카운트 : {this.state.newCount}
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

export default NewCounter;