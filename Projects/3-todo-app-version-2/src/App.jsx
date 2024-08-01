import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import './App.css';
function App() {
  const todoItems=[
    {
    name:'Buy Milk',
    dueDate: '3/19/2024',
    },
    {
      name:'Do Assignments',
      dueDate: '3/19/2024',
    },
    {
      name:'Join Meeting',
      dueDate: '3/25/2024',
    },
  ]
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
