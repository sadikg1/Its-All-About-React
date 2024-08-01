import styles from './TodoItem.module.css'
function TodoItem({todoName, todoDate}) {
  return (
    <div className="container">
      <div className="row sg-row">
      <div className={`col-6 ${styles['todo-list']}`}>{todoName}</div>
        <div className={`col-4 ${styles['todo-list']}`}>{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
