import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
    {todoItems.map(item =><TodoItem key={item.name} todoDate={item.duedate} todoName={item.name}></TodoItem>)}
    </>
  );
};
export default TodoItems;
