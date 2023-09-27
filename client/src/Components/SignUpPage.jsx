import React, { useEffect, useState } from "react";
import Axiosinstance from "../Config/Axiosinstance";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


function SignUpPage() {

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





  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
        username:data.get('username'),
      email: data.get("email"),
      password: data.get("password"),
    };
    Axiosinstance.post('/signup',obj).then((response)=>{
        const data = response.data
        if (data.status==="success") {
                navigate('/')
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
      <div>
      <ToastContainer/>
        <form onSubmit={handleSubmit}>
          <h1>SIGNUP PAGE</h1>
          <div>
            <lable>Name</lable>
            <input aria-label="enter email adress" name="username" type="text" required />
            <lable>Email</lable>
            <input aria-label="enter email adress" name="email" type="email" required />
          </div>
          <div>
            <lable>Password</lable>
            <input aria-label="enter email adress" name="password" type="password" required />
          </div>
          <button type="submit" aria-label="create my account">
            Register
          </button>
          <Link to={'/'}>Already registerd?</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
