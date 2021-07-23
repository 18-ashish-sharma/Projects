import { counterTypes } from '../actionTypes';

const initialState = 0;

const counter = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case counterTypes.increment:
      return state + 1;
    case counterTypes.decrement:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
