function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "3/19/2024";
  return (
    <div class="container">
      <div class="row sg-row">
        <div class="col-6 todo-list">{todoName}</div>
        <div class="col-4 todo-list">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger sg-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
