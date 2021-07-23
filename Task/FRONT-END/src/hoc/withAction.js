import { useSelector } from 'react-redux';

const withAction = (PassedComponent) => {

  return function UpdatedComponent(props) {
    const isLoggedIn = useSelector(state=>state.auth);

    const actionProfile = () => {
      props.history.push('/profile');
    };

    const actionHome = () => {
      props.history.push('/');
    }

    return <PassedComponent
      {...props}
      isLoggedIn={isLoggedIn}
      actionProfile={actionProfile}
      actionHome={actionHome}
    />   
  }
}

export default withAction;
