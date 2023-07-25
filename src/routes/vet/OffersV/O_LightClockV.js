import React,{ useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import StatusT from '../../../components/en_to_fa/StatusT'

const O_LightClockV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const EpochId = useParams().EpochId
  const {updateG} = useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/suggestions/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate) 
  },[updateG])

if(data.length === 0)return <h1 className="text"> پیشنهادی هنوز ثبت نشده</h1>
return (
<div className="flex justify-center text-center">
  <div className="flex flex-col">
    {data.map(i=><div key={i.id} className="border-2 rounded-xl 2xl:w-[50vw] m-2 p-6 px-10 w-[68vw]  mb-4">
      <div className="grid grid-cols-6 gap-1 mb-4">
        <h3 className="my-2 border-l border-[#707070] "> تاریخ </h3>
        <h3 className="my-2 border-l border-[#707070] "> رنگ نور </h3>
        <h3 className="my-2 border-l border-[#707070] "> شدت نور </h3>
        <h3 className="my-2 border-l border-[#707070] "> کل مدت روشنایی  </h3>
        <h3 className="my-2 border-l border-[#707070] "> ساعات روشنایی </h3>
        <h3 className="my-2 "> وضعیت </h3>

        <p className="mx-2">{Gregorian_to_jalali(i.suggested_at)}</p>
        <p className="mx-2">{i.light_color} </p>
        <p className="mx-2">{i.light_intensity} </p>
        <p className="mx-2">{i.total_lighting_hours} </p>
        <p className='mx-[6%] w-[88%] '>
          {i.lighting_hours.map(i=><div className='text-sm'>{i.start_time}-{i.end_time} </div>)}
        </p>
        <p className="mt-2"><StatusT status={i.status} /> </p>
      </div>
      
      <div className="flex justify-between -mb-10 w-[102%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {Gregorian_to_jalali(i.date)} </div>
      </div>
    </div>
    )}
  </div>
</div>
)}
export default O_LightClockV