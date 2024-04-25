import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const[isloading,setisloading] =useState(false)
    async function submitRegister(values) {
    setisloading(true)
    try{
     setisloading(false)
const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
if(data.message === 'success') {
console.log("message", data.message, "mr bisho");
console.log(values);
navigate('/Login');
            }
        } catch (err) {
         setisloading(false)
         console.log("message error is=>", err.response.data.message);
         setError(err.response.data.message);
        }
    }
    let validationSchema = yup.object({
 name: yup.string().min(3,"name minlenght is 3").max(20, "name maxlenght is 3").required("name requierd"),
 email: yup.string().email("email is invalid").required("email requierd"),
 password: yup.string().matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'wrong password').required("password is requierd"),
 rePassword: yup.string().oneOf([yup.ref("password"), "password is not matches"]).required("repassword is requierd"),
 phone: yup.string().required("phone requierd"),
    });
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        },
        validationSchema,
        onSubmit: submitRegister
    });
    return (
        <>
     <div className="w-75 mx-auto py-5 border border-1 p-3">
{error !== null ? <div className='alert alert-danger'>{ error}</div> : ''}
<h2>Register Now</h2>
<form onSubmit={formik.handleSubmit} className="container mt-3 border border-1  h-75 mx-auto border-black">
    <label htmlFor="name">Name:</label>
    <input name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} id='name' type='text' value={formik.values.name} className='form-control' />
    {formik.errors.name && formik.touched.name ? <div className='alert mt-2 p-2 alert-danger'> {formik.errors.name} </div> : ""}

    <label className='mt-3' htmlFor="email">Email:</label>
    <input name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} id='email' type='email' value={formik.values.email} className='form-control' />
    {formik.errors.email && formik.touched.email ? <div className='alert mt-2 p-2 alert-danger'>{formik.errors.email} </div> : ""}

    <label className='mt-3' htmlFor="password">password:</label>
    <input name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} id='password' type='password' value={formik.values.password} className='form-control' />
    {formik.errors.email && formik.touched.email ? <div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div> : ""}

    <label className='mt-3' htmlFor="rePassword">Repassword:</label>
    <input name="rePassword" onBlur={formik.handleBlur} onChange={formik.handleChange} id='rePassword' type='password' value={formik.values.rePassword} className='form-control' />
    {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert mt-2 p-2 alert-danger'> {formik.errors.rePassword} </div> : ""}

    <label className='mt-3' htmlFor="phone">Telefon:</label>
    <input name="phone" onBlur={formik.handleBlur} onChange={formik.handleChange} id='phone' type='tel' value={formik.values.phone} className='form-control' />
    {formik.errors.phone && formik.touched.phone ? <div className='alert mt-2 p-2 alert-danger'>{formik.errors.phone} </div> : ""}
    {isloading?<button type="submit" className='btn btn-success p-2 mt-4 d-inline-block ms-2'><i className='fas fa-spinner fa-spin '></i></button>: <button type="submit" className='btn btn-success p-2 mt-4 d-inline-block'>Submit</button>
}
                </form>
            </div>
        </>
    );
}

  















