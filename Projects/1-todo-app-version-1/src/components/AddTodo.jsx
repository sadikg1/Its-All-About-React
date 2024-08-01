function AddTodo() {
  return (
    <div class="container">
      <div class="row sg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success sg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
