import React from "react";
import './Signup.css';
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
  function SignUp(){
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [key, setkey] = useState('');
    const navigate=useNavigate("")
  const initialState = {
    name: "",
    password: "",
    email: "",
    city: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    password: yup.string().required("Enter your name").min(5,"password must be a 5 character"),
    email: yup.string().required().email("Enter your email"),
    city: yup.string().required("Enter your city"),
  });
  const handelSubmit = (values) => {
    let obj = {
      ...values,
    };
    console.log(obj);
};
 
const handle = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pwd);
    localStorage.setItem('email', email);
    localStorage.setItem('city', city); 
    navigate("/")
 };

 const handletwo=()=>{
    navigate("/")
 }

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handelSubmit}
    >
      <div className="container">
        <Form className="SignUp">
            <h3>SignUp</h3>

          <div><Field type="text"  value={name}
            onChange={(e) => setName(e.target.value)} placeholder="Enter your name"></Field>    
        </div>
         <div>
         <Field
            type="text"
            name="password"
            placeholder="Enter your password"  value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          ></Field>
         </div>
        <div>
          <Field
            type="text"
            name="email"
            placeholder="Enter your email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Field>
          </div>
          <div>
          <Field type="text" value={city}
            onChange={(e) => setCity(e.target.value)} placeholder="Enter your city"></Field>
          </div>
          <button type="submit" onClick={handle}>SignUp</button>
          <p>if already registered</p>
          <button type='submit' onClick={handletwo} >Login</button>
        </Form>
      </div>
    </Formik>
  );
}

export default SignUp;