/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import firstFetch from '../components/firstFetch';
import { myContext } from '../context';
import { useContext } from 'react';


// 09125844121 vet
// 09128458202 vet
// 09121111111 farmer
// 09362580015 admin
// password 123

const Login = () => {
  const [userName,setuserName] = useState('')
  const [password,setpassword] = useState('')
  const [error,setError]=useState('')
  const [onLoad,setOnLoad]=useState(false)
  const {setAccess}=useContext(myContext)
  const navigate =useNavigate()


  const login =async()=>{
    if(userName.trim()&& password.trim()){
      setOnLoad(true)
    const body={ "phone_number": userName, password }
    const method='POST'
    const api='/api/auth/token/'
    firstFetch(body,method,api,navigate,setOnLoad,setError,setAccess)
    }
    else{
      setError('نام کاربری و رمز عبور را وارد کنید')
    } 
  }
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
          <input dir='ltr' className="" value={userName} onChange={e => setuserName(e.target.value)} />
          
        </div>
        <div className='flex flex-row items-center justify-around'>
           <h4 className="">رمز عبور</h4>
          <input dir='ltr' className="mr-2" value={password} onChange={e => setpassword(e.target.value)} type='password' />
        </div>
      </div>
      <div className=' mr-10 mt-6 text-xs'>
        <p className='text-red-500'>
          {error}
        </p>
      </div>
      <div className="flex justify-end mt-7 ">
        <button disabled={onLoad} onClick={login} className='btn-g justify-center items-center flex h-7'>{onLoad ?<div className=' bg-transparent border-[3px] border-r-transparent border-white w-5 h-5 rounded-full animate-spin '></div>:'ورود'}</button>
      </div>
    </div>
  </div>
</div>
)}
export default Login