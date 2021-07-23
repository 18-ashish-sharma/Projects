import { useEffect, useRef } from "react";
const AddTask = (props) => {
  const { submitHandler, task, setTask, updatingId } = props;
  const inputref = useRef()
  useEffect(() => {
    inputref.current.focus()
  },[inputref])

  const buttonelement = (element) => {
    console.log(element)
  }
  return (
    <form onSubmit={submitHandler} className="task-form">
      <input
        className="form-control"
        ref={inputref}
        id="add-task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task..."
      />
      <button
        type="submit"
        className={`btn btn-success${task ? '' : ' disabled'}`}
      >
        {updatingId ? 'Update' : 'Add'}
      </button>

      <button 
      ref={buttonelement} >
        hello
      </button>
    </form>
  );
}

export default AddTask;
