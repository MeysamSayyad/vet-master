import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'

const V_LightClockV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

if(data.length === 0)return <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>
return (
<div className="flex flex-col text-center">
  {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 p-4 md:px-12 px-4 ">
      <div className="grid grid-cols-5 text-center gap-4">
        <h5 className="my-2 border-l border-[#707070]">تاریخ</h5>
        <h5 className="my-2 border-l border-[#707070]">رنگ نور</h5>
        <h5 className="my-2 border-l border-[#707070]">شدت نور</h5>
        <h5 className="my-2 border-l border-[#707070]">ساعات</h5>
        <h5 className="my-2 "> کل مدت  </h5>
        <h6 className="">{Gregorian_to_jalali(i.date)} </h6>
        <h6 className="">{i.light_color} </h6>
        <h6 className="">{i.light_intensity} </h6>
        <div className="flex flex-col">
          {i.lighting_hours.map(i=>
            <div className="">{i.start_time} - {i.end_time} </div>
          )} 
        </div>
        <h6 className="">{i.total_lighting_hours} </h6>
      </div>
    </div>
  )}
</div>
)}
export default V_LightClockV