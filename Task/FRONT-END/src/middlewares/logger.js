/**
function logger(store){
  return function(next) {
    return function(action) {
      console.log(action)
    }
  }
}
*/
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  next(action);
  // let result =   next(action)
  console.log('next state', store.getState());
  console.groupEnd();
  // return result
};

export default logger;