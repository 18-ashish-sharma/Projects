import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import InputField from "../../components/InputField";
import { axios, PATHS } from "../../config";

let schema = yup.object().shape({
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
});

const Signup = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    schema
      .validate({ firstName, email, password })
      .then(async (data) => {
        const response = await axios({
          method: "post",
          url: "signup",
          data
        });
        // console.log(response)

        history.push(PATHS.PROFILE);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Link to="/login">Login</Link>
      <form onSubmit={submitHandler}>
        <InputField
          value={firstName}
          setValue={setFirstName}
          fieldId="inputFirstName"
          label="First Name"
          name="firstName"
        />

        <InputField
          value={lastName}
          setValue={setLastName}
          fieldId="inputLastName"
          label="Last Name"
          name="lasttName"
        />

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

export default Signup;
