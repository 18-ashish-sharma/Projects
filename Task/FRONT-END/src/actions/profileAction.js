import { profileTypes } from '../actionTypes';
import axios from 'axios';

const profileAction = {
  getDetails: () => (dispatch) => {
    return axios({
      method: 'post',
      url: 'http://localhost:5000/user',
      headers: {'Authorization': 'bearer '+localStorage.getItem('_ut_')}
    }).then(resp => {
      dispatch({type: profileTypes.get, payload: resp.data})
    })
  }
};

export default profileAction;