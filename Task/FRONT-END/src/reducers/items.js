import { itemsTypes } from '../actionTypes';

const initialState = [];

const items = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case itemsTypes.add:
      return [ ...state, action.payload ];
    case itemsTypes.remove:
      return state.filter(item => item.name !== action.payload);
    default:
      return state;
  }
}

export default items;
