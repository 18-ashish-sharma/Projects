import { taskTypes } from '../actionTypes';

const taskAction = {
  add: (payload) => ({type: taskTypes.add, payload}),
  delete: (payload) => ({type: taskTypes.delete, payload}),
  edit: (payload) => ({type: taskTypes.edit, payload}),
};

export default taskAction;