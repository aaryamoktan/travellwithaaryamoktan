import React, { useEffect, useState } from "react";
import "../../css/regist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Main from "../main";
const Login = () => {
 
  const navigation = useNavigate();
  const [formsvalue, setdata] = useState({
   
    email: "",
    password: "",
   
  });
  let name, value;
  const onchange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setdata({ ...formsvalue, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    try{ 
      const { email, password } = formsvalue;
      const { data } = await axios.post("/login", { 
        email,
        password, 
      }); 
     alert("login sucessfull");
     navigation("/")
    }  
    catch (error) {
      toast.error(error.response.data)
    }
  };
  return (  
    <div className="regis">
      <div className="form">
        <form method="post">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          

          <lable>Email:</lable>
          <br />
          <input
            type="text"
            name="email"
            onChange={onchange}
            value={formsvalue.email}
            placeholder="enter your email"
          />
          <br />

          <lable>Password:</lable>
          <br />
          <input
            type="password"
            name="password"
            onChange={onchange}
            value={formsvalue.password}
            placeholder="password"
          />
          <br />
          <button type="submti" onClick={submit}>
            Login
          </button>
        </form>
      </div>
    
    </div>
  );
};

export default Login;
