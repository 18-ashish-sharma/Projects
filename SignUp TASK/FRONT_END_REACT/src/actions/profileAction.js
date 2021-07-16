import { profileTypes } from "../actionTypes";
import { axios } from "../config";

const profileAction = {
  getDetails: () => (dispatch) => {
    return axios({
      method: "post",
      url: "user"
    }).then((rep) => {
      dispatch({ type: profileTypes.get, payload: Response.data });
    });
  }
};

export default profileAction;
