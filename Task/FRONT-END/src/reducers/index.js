import { combineReducers } from 'redux';

// import counter from './counter';
// import data from './data';
// import items from './items';
// import posts from './posts';
import auth from './auth';
import profile from './profile';
import tasks from './tasks';

export default combineReducers({
  // counter,
  // data,
  // items,
  // posts
  auth,
  profile,
  tasks
});