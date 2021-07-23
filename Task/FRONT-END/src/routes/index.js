import { PATHS } from '../config';
import Home from '../containers/Home';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';


// const routes = [
//   { exact: true, path: PATHS.HOME, component: Home },
//   { exact: true, path: PATHS.POSTS, component: Posts },
//   { exact: true, path: PATHS.POST_DETAIL, component: PostDetail },
// ];

const routes = [
  { exact: true, path: PATHS.HOME, component: Home },
  { exact: true, path: PATHS.LOGIN, component: Login },
  { exact: true, path: PATHS.SIGNUP, component: SignUp },
  { exact: true, path: PATHS.PROFILE, component: Profile },
  { path: '*', exact: true, component: NotFound}
];

export default routes;
