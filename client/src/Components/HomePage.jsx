import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate=useNavigate()
  const [token,setToken]=useState()
  useEffect(()=>{
    async function invoke(){
      setToken(localStorage.getItem("token"))
    }invoke()
  },[])

  if (!token) {
    navigate('/')
  } 

  return (
    <div>
        <h1 className='text-4xl items-center text-red-500  text-center justify-center'>Welcome to HomePage</h1>
        </div>
  )
}

export default HomePage