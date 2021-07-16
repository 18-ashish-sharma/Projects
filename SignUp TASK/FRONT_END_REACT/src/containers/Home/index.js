import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      THis is Home
      <br />
      <br />
      <br />
      <Link to="/signup">Sign up</Link>
      <br />
      <br />
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
