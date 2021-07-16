import { Link } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import InputField from "../../components/InputField";
import { setAuth } from "../../util/auth";
import authAction from "../../actions/authAction";
import { axios, PATHS } from "../../config";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
});

const Login = ({ history }) => {
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    schema
      .validate({ email, password })
      .then((data) => {
        axios({
          method: "post",
          url: "login",
          data
        }).then((resp) => {
          dispatch(authAction.login());
          history.push("/profile");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={submitHandler}>
        <InputField
          value={email}
          setValue={setEmail}
          fieldId="inputEmail"
          label="Email"
          name="email"
        />

        <InputField
          value={password}
          setValue={setPassword}
          fieldId="inputPassword"
          label="Password"
          name="password"
        />

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
