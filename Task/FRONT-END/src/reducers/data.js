import { dataTypes } from '../actionTypes';

const initialState = {};

const data = (state, action) => {
  state = state || initialState;

  if(action.type === dataTypes.add) {
    return action.payload
  }
  return state;
}

export default data;
