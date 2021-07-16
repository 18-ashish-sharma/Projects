import { PATHS } from "../config";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Profile from "../containers/Profile";

const routes = [
  { path: PATHS.HOME, exact: true, component: Home },
  { path: PATHS.LOGIN, exact: true, component: Login },
  { path: PATHS.SIGNUP, exact: true, component: Signup },
  { path: PATHS.PROFILE, exact: true, component: Profile }
];

export default routes;
