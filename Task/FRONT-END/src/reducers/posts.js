import { postsTypes } from '../actionTypes';

const initialState = [];

const posts = (state, action) => {
  state = state || initialState;

  if(action.type === postsTypes.list) {
    return action.payload
  }
  return state;
}

export default posts;
