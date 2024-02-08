// import React from 'react'
import './register-login.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { apidomain } from '../../Utils/apiDomain';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyles } from '../../../toastConfig';


const schema = yup.object().shape({
    FirstName: yup.string().required("First Name is required"),
    LastName: yup.string().required("Last Name is required"),
    EmailAddress: yup.string().email("email is invalid").required("Email is required"),
    Password: yup.string().min(4, "password must be at least 4 characters").required("Password is required"),
    ConfirmPassword: yup  
    .string()
    .oneOf([yup.ref("Password"), null], "Password must match")
    .required("Confirm Password is required"),
});

function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });


    const onSubmit = (data) => {
        Axios.post(`${apidomain}/api/auth/register`, data)
        .then((response) => {
            console.log(response.data.message);
            toast.success(response.data.message, toastStyles.success);
            navigate("/auth/login");
            reset();
        })
        .catch((error) => {
            // console.log(error.response.data.message);
            toast.error(error.response.data.message, toastStyles.error);
        });
        console.log(data);
    };

  return (
    <div className="register_page">
        <h3 className="register_title">
                Register for an account
            </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/*  FirstName, LastName, EmailAddress, Password */}
            <label htmlFor="First Name">First Name</label>
            <input type="text" placeholder="example john"  {...register("FirstName")}/>
            <p className='errors'>{errors.FirstName?.message}</p>

            <br />

            <label htmlFor="Last Name">Last Name</label>
            <input type="text" placeholder="example doe" {...register("LastName")} />
            <p className='errors'>{errors.LastName?.message}</p>

            <br />

            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="example@gmail.com" {...register("EmailAddress")}/>
            <p className='errors'>{errors.EmailAddress?.message}</p>

            <br />

            <label htmlFor="Password">Password</label>
            <input type="password" placeholder="********" {...register("Password")}/>
            <p className='errors'>{errors.Password?.message}</p>

            <br />

            <label htmlFor="Confirm Password">Confirm Password</label>
            <input type="password" placeholder="********" {...register("ConfirmPassword")}/>
            <p className='errors'>{errors.ConfirmPassword?.message}</p>

            <br />

            <button type="submit" className='register_button'>Register</button>

        </form>
        
    </div>
  )
}

export default Register