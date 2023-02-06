import React from 'react';
import {useState, useEffect} from 'react';

function Example(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  })



  return(
    <div>
      <p>주노손 님은 {count} 번 클릭하셨습니다</p>
      <button onClick={() => setCount(count + 1)}> 
      클릭해주세요</button>
      
    </div>
  );
  
}

export default Example;