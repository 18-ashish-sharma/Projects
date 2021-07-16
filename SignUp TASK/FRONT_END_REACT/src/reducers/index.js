import { authTypes } from "../actionTypes";

const auth = (state, action) => {
  state = state || !!localStorage.getItem("isAuth");
  // !! - will gives us true

  switch (action.type) {
    case authTypes.login:
      localStorage.setItem("isAuth", true);
      return true;

    case authTypes.logout:
      localStorage.removeItem("isAuth");
      return false;

    default:
      return state;
  }
};

export default auth;
