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
  const [error,setError]=useState('')
  const [onLoad,setOnLoad]=useState(false)
  const navigate =useNavigate()
  const cookies = new Cookies()

  const login =async()=>{
    if(userName.trim()&& password.trim()){
      setOnLoad(true)
    const body={ "phone_number": userName, password }
    const token=false
    const method='POST'
    const api='/api/auth/token/'
    Fetch(body,token,setdata,method,api,navigate,setOnLoad,setError)
    }
    else{
      setError('نام کاربری و رمز عبور را وارد کنید')
    } 
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
      <div className="flex flex-col gap-4 w-full ">
        <div className="flex flex-row items-center justify-around">
          <h4 className="">نام کاربری</h4>
          <input className="" value={userName} onChange={e => setuserName(e.target.value)} />
          
        </div>
        <div className='flex flex-row items-center justify-around'>
           <h4 className="">رمز عبور</h4>
          <input className="mr-2" value={password} onChange={e => setpassword(e.target.value)} type='password' />
        </div>
      </div>
      <div className=' mr-10 mt-6 text-xs'>
        <p className='text-red-500'>
          {error}
        </p>
      </div>
      <div className="flex justify-end mt-7 ">
        <button onClick={login} className='btn-g justify-center items-center flex h-7'>{onLoad ?<div className=' bg-transparent border-[3px] border-r-transparent border-white w-5 h-5 rounded-full animate-spin '></div>:'ورود'}</button>
      </div>
    </div>
  </div>
</div>
)}
export default Login