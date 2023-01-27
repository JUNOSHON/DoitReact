import React, { Component } from 'react'
import React, {useState} from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count +1)}>
            Clickme
            </button>
        </div>
    )
}



// export default class Example extends Component {
//     constructor(props)
//     super(props);
//     this.state = {
//         count : 0
//     };
//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({count: this.state.count + 1})}></button>
      
//       </div>
//     );
//   }
// }

// const Example = (props) => {
//     return <div />;
// }
// function Example(props){
//     return <div />;
// }