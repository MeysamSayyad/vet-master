import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from '../components/Fetch';
import Cookies from "universal-cookie";
import { useEffect } from 'react';
// 09125844121 vet
// 09128458202 vet
// 09121111111 farmer
// 09362580015 admin
// password 123

const Login = () => {
  const [userName,setuserName] = useState('')
  const [password,setpassword] = useState('')
  const [data,setdata] = useState({role:''})
  const navigate =useNavigate()
  const cookies = new Cookies()

  const login =async()=>{
    const body={ "phone_number": userName, password }
    const token=false
    const method='POST'
    const api='/api/auth/token/'
    Fetch(body,token,setdata,method,api)
  }
  useEffect(()=>{
    if(data.role === 'VET' ){ navigate(`/NavV/HomePageV/${data.id}`)}
    if(data.role === "FARMER" ){ navigate(`/NavF/HomePage/${data.id}`)}
    if(data.access){ cookies.set('access',data.access,{maxAge:172800})}
    if(data.refresh){ cookies.set('refresh',data.refresh,{maxAge:172800})}
  },[data])
return (
<div className='p-10'>
  <div className="center">
    <img src="/img/home button.png" alt="" className="w-[35vw] " />
  </div>
  
  <div className="center">
    <div className="rounded-lg shadow-lg w-[530px] p-11 py-8 ">
      <div className="grid grid-cols-2 w-full ">
        <div className="">
          <h4 className="">نام کاربری</h4>
          <h4 className="mt-5">رمز عبور</h4>
        </div>
        <div className="">
          <input className="" value={userName} onChange={e => setuserName(e.target.value)} />  
          <input className="mt-5" value={password} onChange={e => setpassword(e.target.value)} type='password' />
        </div>
      </div>
      <div className="flex justify-end mt-10 ">
        <button onClick={login} className='btn-g'>ورود</button>
      </div>
    </div>
  </div>
</div>
)}
export default Login