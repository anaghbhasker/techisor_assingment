import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axiosinstance from "../Config/Axiosinstance";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {
    const navigate=useNavigate()
    const [token,setToken]=useState()
  useEffect(()=>{
    async function invoke(){
      setToken(localStorage.getItem("token"))
    }invoke()
  },[])

  if (token) {
    navigate('/home')
  } 



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
      email: data.get("email"),
      password: data.get("password"),
    };
    Axiosinstance.post('/login',obj).then((response)=>{
        const data = response.data
        if (data.status==="success") {
          localStorage.setItem('token',data.token)
            navigate('/home')
        } else {
            toast.error(`${data.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    })
  };
  return (
    <div>
      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <h1>LOGIN PAGE</h1>
        <div>
          <lable>Email</lable>
          <input aria-label="enter email adress" name="email" type="email" required />
        </div>
        <div>
          <lable>Password</lable>
          <input aria-label="enter email adress" name="password" type="password" required />
        </div>
        <button type="submit" aria-label="create my account">
          Login
        </button>
        <Link to={'/signup'}>Create a new account</Link>
      </form>
    </div>
  );
}

export default LoginPage;
