const componentList = [<MyComponent/>, <MySecondComponent />,<b>JUNO</b>]; //JSX 배열

const todoList = [
    {taskName : '리액트 공부하기', finished: false},
    {taskName: '몽고디비 공부하기', finished: true},
];
const todos = todoList.map(todo => <div>{todo.taskName}</div>);
const todos1 = todoList.map(todo => <TodoTask />);
const todos2 = todoList.map(todo=><TodoTask taskName={todo.taskName} />);