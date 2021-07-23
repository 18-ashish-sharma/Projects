import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import taskAction from '../../actions/taskAction';
import AddTask from './AddTask';
import TaskList from './TaskList';

import './index.scss';



const Tasks = () => {
  const dispatch = useDispatch();

  const [ task, setTask ] = useState('');
  const [ updatingId, setUpdatingId ] = useState('');
  const tasks = useSelector(state => state.tasks);

  const deleteTask = (id) => {
    dispatch(taskAction.delete(id));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    updatingId ?
      dispatch(taskAction.edit({id:updatingId, title: task})) :
      dispatch(taskAction.add(task));
    setTask('');
    setUpdatingId('');
  }

  return (
    <div className="task-container">
      <AddTask
        setTask={setTask}
        task={task}
        submitHandler={submitHandler}
        updatingId={updatingId}
      />
      <TaskList
        data={tasks}
        deleteTask={deleteTask}
        setTask={setTask}
        setUpdatingId={setUpdatingId}
      />
    </div>
  )
};

export default Tasks;
