import React,{ useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'

const V_BeakV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/beak-trimming/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

if(data.length === 0)return <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>
return (
<div className="center">
  <div className="flex flex-col text-center">
    {data.map(i => 
      <div className="border-2 rounded-3xl m-2 p-5 md:px-24 px-4 max-w-[700px] ">
        <h2 className="">
        نوک چینی در تاریخ <span className='mx-1' dir='ltr'>{Gregorian_to_jalali(i.date)}</span> انجام شد 
        </h2>
      </div>
    )}
  </div>
</div>
)}
export default V_BeakV