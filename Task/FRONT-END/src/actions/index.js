import { counterTypes, dataTypes, postsTypes } from '../actionTypes';

export const incrementCounter = () => ({ type: counterTypes.increment });

export const decrementCounter = () => ({ type: counterTypes.decrement });

export const addData = () => ({ type: dataTypes.add, payload:{name:'Manish'} });

export const listPost = (payload) => ({ type: postsTypes.list, payload });

export const getPost = (id='') => (dispatch) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res=>res.json())
  .then(res=>{
    dispatch({ type: postsTypes.list, payload: res });
  });
}

