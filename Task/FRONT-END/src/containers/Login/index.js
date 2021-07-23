import './index.scss'
import { useState } from 'react'
import * as yup from 'yup'
import { useDispatch,useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {axios} from '../../config'
import Toast from '../../components/Toast'
import Inputfield from '../../components/Inputfield';
import { setAuth } from '../../utils/auth';
import authAction from '../../actions/authAction'
// import ColorContext from '../../context/ColorContext'

let schema = yup.object().shape({
    password: yup.string().required().min(6),
     email: yup.string().required().email()
});

const Login = ({history}) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state=>state.auth);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState('')
    if(isLoggedIn) {
        return <Redirect to="/" />
      }
    
    const submithandler = (e) => {
        e.preventDefault()
        schema.validate({ email, password },{abortEarly:false} ).then(data => {
            setmessage('')
            axios({
                method: 'post',
                url: 'login',
                data
              })
              .then(resp=> {
                // setAuth(resp.data);
                console.log(resp.data)
                
                if (resp.data.error) {
                    setmessage(resp.data.error)
                } else {
                    dispatch(authAction.login())
                    console.log(true)
                    setAuth(resp.data);
                    history.push('/profile')
                }

              })
              .catch(err=>{
                setmessage(err.message);
              });
        }).catch(function (err) {
            setmessage(err.errors)
            console.log(err)
        })
    }
    return (
        <>
            <form className="login-form" onSubmit={submithandler}>
                <Toast message={message} /> 
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
                        {/* <ColorContext.Consumer> */}
                        {/* <ColorContext.Consumer>
                        </ColorContext.Consumer> */}
                        <button type='submit' className="btn btn-outline-danger">Login</button>
                        {/* </ColorContext.Consumer> */}
                    </div>
                </div>

         </form>
        </>
    )
}

export default Login