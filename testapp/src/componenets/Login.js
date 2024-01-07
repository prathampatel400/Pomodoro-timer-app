import React from "react";
import "./Login.css";
import { Field, Formik, Form ,ErrorMessage} from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function Login() {
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const navigate =useNavigate("")
  const initialState = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required().email("Enter your email"),
    password: yup.string().required("Enter your name"),
  });
  const handelSubmit = (values) => {
    let obj = {
      ...values,
    };
    console.log(obj);
  };
  const handle = () => {
    navigate("/Myhome")
    alert("success")
 };
 const handelone=()=>{
    navigate("/Signup")

 }
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handelSubmit}
    >
      <div className="Main-Login">
        <Form className="Login">
          <h3>Login</h3>
          <div style={{lineHeight:"10px"}}>
          <Field
            type="text"
            placeholder="Enter your email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Field>
          </div>
         <div style={{lineHeight:"10px"}}>
         <Field
            type="text"
            placeholder="Enter your password"  value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          ></Field>
         </div>
         <button type="submit" onClick={handle} >Login</button>
          <p>if not registered</p>
          <button onClick={handelone} style={{padding:"5px"}}>SignUp</button>
        </Form>
      </div>
    </Formik>
  );
}

export default Login;