import { Link } from 'react-router-dom';
import { PATHS } from '../../config';

const  Menu = (props) => {
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to={PATHS.HOME}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={PATHS.POSTS}>Posts</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Menu;
