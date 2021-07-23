import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = (PassedComponent, showComponent, redirectTo ) => {

  return function UpdatedComponent(props) {
    const isLoggedIn = useSelector(state=>state.auth);

    if(showComponent) {
      return isLoggedIn ?
        <PassedComponent {...props} isLoggedIn={isLoggedIn} /> :
        <Redirect to={redirectTo} />      
    } else {
      return isLoggedIn ?
        <Redirect to={redirectTo} /> :
        <PassedComponent {...props} isLoggedIn={isLoggedIn} />
    }

  }
}

export default withAuth;
