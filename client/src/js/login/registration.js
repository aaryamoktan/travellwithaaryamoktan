import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import "../../css/regist.css";
import axios from "axios";

const Registration = () => {
  const navigation = useNavigate();
  const [formsvalue, setdata] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
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
      
      const { name, email, password, number } = formsvalue;
      const { data } = await axios.post("/registration", {
        name,
        email,
        password,
        number,
      });
      
     alert("user registration sucesfully")
    navigation("/login")
   
      
    } 
    
    catch (error) {
      toast.error(error.response.data);
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
          <lable>Name:</lable>
          <br />
          <input
            type="text"
            name="name"
            onChange={onchange}
            value={formsvalue.name}
            placeholder="name"
          />
          <br />

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

          <lable>Contack-no.:</lable>
          <br />
          <input
            type="text"
            name="number"
            onChange={onchange}
            value={formsvalue.number}
            placeholder="Contack_Number"
          />
          <br />

          <button type="submti" onClick={submit}>
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
