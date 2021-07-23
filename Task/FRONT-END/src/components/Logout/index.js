import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authAction from '../../actions/authAction';

const Logout = ({ to, name }) => {

  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(authAction.logout())
  }

  return (
    <Link onClick={logoutUser} className="me-3 py-2 text-dark text-decoration-none" to={to}>{name}</Link>
  )
}

export default Logout;