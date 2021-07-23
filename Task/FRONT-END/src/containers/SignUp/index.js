import './index.scss'
import { useState } from 'react'
import * as yup from 'yup'
import Toast from '../../components/Toast'
import { PATHS } from '../../config';
import Inputfield from '../../components/Inputfield';
import axios from 'axios';
import { string } from 'yup/lib/locale';
import authAction from '../../actions/authAction';
import {useDispatch} from 'react-redux'
let schema = yup.object().shape({
  password: yup.string().required().min(6),
  email: yup.string().required().email(),
  firstname: yup.string().required().min(6),
  image: yup.string()
});

const SignUp = ({ history }) => {
  const dispatch = useDispatch()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [message, setmessage] = useState('')
  const [firstname, setfirstname] = useState('')
  const [image, setimage] = useState("")
  const submithandler = (e) => {
    e.preventDefault();

    schema.validate({ firstname, email, password, image }, { abortEarly: false })
      .then(async data => {
        setmessage('');

        const response = await axios({
          method: 'post',
          url: 'http://localhost:5000/signup',
          data
        });
        console.log(response, "hellodfsdfs")
        if (response.data.error !== "") {
          console.log("error")
          setmessage(response.data.error)

        } else {
          dispatch(authAction.login())
          history.push(PATHS.PROFILE)
          setmessage("")
        }
        //   if(Object.values(response.data.error).length) {
        //     setmessage(response.data.message);
        //   } else {
        //     history.push(PATHS.LOGIN);
        //   }

      })
      .catch(err => {
        const errorMessage = err.errors ? err.errors[0] : err.message
        setmessage(errorMessage);
        console.log("Successful")
      });
  }

  return (
    <>
      <form className="signup-form" onSubmit={submithandler}>
        <Toast message={message} />

        <Inputfield
          name="firstname"
          value={firstname}
          setValue={setfirstname}
          label='First Name'
          fieldId="Inputfirstname"
          type="text"
        />

        <Inputfield
          name="email"
          value={email}
          setValue={setemail}
          label='Email'
          fieldId="Inputemail"
          type="email"
        />

        <Inputfield
          name="password"
          value={password}
          setValue={setpassword}
          label='Password'
          fieldId='Input password'
          type='oassword'
        />
        <div className="mb-3 row">
          <div className="col-sm-10">
            <button type='submit' className="btn btn-outline-danger">Login</button>
          </div>
        </div>

      </form>
    </>
  )
}

export default SignUp
