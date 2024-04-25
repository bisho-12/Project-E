import React, { useContext, useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


export default function Login(){
const {setuserToken} = useContext(UserContext);
 const [error, setError] = useState(null);
 const navigate = useNavigate();
 const[isloading,setisloading] =useState(false)
 async function submitLogin(values) {
 setisloading(true)
      
try {
const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/Signin`, values);
if (data.message === 'success'){
setisloading(false)
 console.log("message", data.message,"mr bisho");
 console.log("token", data.token);
 localStorage.setItem("userToken",data.token)
setuserToken(data.token)
 navigate('/Home');
    }
     }catch (err) {
  setisloading(false)
console.log("message error is=>", err.response.data.message);
setError(err.response.data.message);
        }
    }
  let validationSchema = yup.object({
  email: yup.string().email("email is invalid").required("email requierd"),
  password: yup.string().matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'wrong password').required("password is requierd"),
    });
    let formik = useFormik({
    initialValues: {
    email: '',
    password: '',
        },
        validationSchema,
        onSubmit:submitLogin
    });
    return (
        <>
            <div className="w-75 mx-auto py-5 border border-1 p-3">
                {error !== null ? <div className='alert alert-danger'>{ error}</div> : ''}
                <h2>Login Now</h2>
                <form onSubmit={formik.handleSubmit} className="container mt-3 border border-1  h-75 mx-auto border-black">
                    <label className='mt-3' htmlFor="email">Email:</label>
                    <input name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} id='email' type='email' value={formik.values.email} className='form-control' />
                    {formik.errors.email && formik.touched.email ? <div className='alert mt-2 p-2 alert-danger'>{formik.errors.email} </div> : ""}

                    <label className='mt-3' htmlFor="password">password:</label>
                    <input name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} id='password' type='password' value={formik.values.password} className='form-control' />
                    {formik.errors.email && formik.touched.email ? <div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div> : ""}
                    {isloading?<button type="submit" className='btn btn-success p-2 mt-4 d-inline-block ms-2'><i className='fas fa-spinner fa-spin '></i></button>: <button type="submit" className='btn btn-success p-2 mt-4 d-inline-block'>Submit</button>}

                </form>
            </div>
        </>
    );
}

  















