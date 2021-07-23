const thunk = store => next => action => {
  // console.log(action);
  console.group(action.type);
  console.info('dispatching', action);
  console.log('next state', store.getState());
  console.groupEnd();
  typeof action === 'function' ?
    action(store.dispatch) :
    next(action);
};

export default thunk;
