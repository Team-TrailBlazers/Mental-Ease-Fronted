import React, {useState} from 'react'
import './login.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../Redux/apiCall';
import {useDispatch} from 'react-redux';
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  EmailAddress: yup.string().email("email is invalid").required("Email is required"),
  Password: yup.string().min(4, "password must be at least 4 characters").required("Password is required"),
});


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmit = async (data) => {
    setLoading(true);
    await loginUser(dispatch, data,  () => navigate("/home"));
    setLoading(false);
  };

return (
  <div className="register_page">
      <h3 className="register_title">
              Login to your account
          </h3>
      <form onSubmit={handleSubmit(onSubmit)} id='login-form'>


          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="example@gmail.com" {...register("EmailAddress")}/>
          <p className='errors'>{errors.EmailAddress?.message}</p>

          <br />

          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="********" {...register("Password")}/>
          <p className='errors'>{errors.Password?.message}</p>

          <br />

          <button type="submit" className={`auth_button ${loading ? 'loading' : ''}`} disabled={loading}>
          {loading ? 'Please wait...' : 'Login'}
          {loading && <div className="spinner"></div>}
          </button>

      </form>
      
  </div>
)
}

export default Login