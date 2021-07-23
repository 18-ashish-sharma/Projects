import { taskTypes } from '../actionTypes';

const tasks = (state, action) => {
  state = state || [];

  switch (action.type) {
    case taskTypes.add:
      return state.concat({
        id: Math.random(),
        title: action.payload
      });
      
    case taskTypes.delete:
      return state.filter(task => task.id !== action.payload);
      
    case taskTypes.edit:
      return state.map(task => {
        if(task.id === action.payload.id) {
          task.title = action.payload.title
        }
        return task;
      });
  
    default:
      return state;
  }

};

export default tasks;
