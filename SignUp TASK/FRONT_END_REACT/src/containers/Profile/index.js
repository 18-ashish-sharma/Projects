import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import profileAction from "../../actions/profileAction";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>{profile.firstName}</h1>

      <h2>{profile.email}</h2>
    </div>
  );
};

export default Profile;
