import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import StatusT from '../../../components/en_to_fa/StatusT'

const O_LightClock = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const navigate =useNavigate()
  const EpochId = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/suggestions/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate,setLoading) 
  },[])


return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>:(
<>
  <h2 className=" text-center text-2xl mb-4"> ساعات روشنایی پیشنهادی دامپزشک </h2>

  <div className="flex justify-center text-center">
    <div className="flex flex-col">
      {data.map((i,index)=>
      <div key={index} className="border-2 rounded-xl 2xl:w-[50vw] m-2 p-6 px-12 w-[68vw] mb-4 ">
            {/* {i.status == 'PENDING'?'در انتظار':i.status == 'DONE'?'انجام شده':'پذیرفته نشده'} */}
        <div className="grid grid-cols-6 mb-4">
          <h3 className=" border-l px-1"> تاریخ </h3>
          <h3 className=" border-l px-1"> رنگ نور </h3>
          <h3 className=" border-l px-1"> شدت نور </h3>
          <h3 className=" border-l px-1"> کل مدت روشنایی  </h3>
          <h3 className=" border-l px-1"> ساعات روشنایی </h3>
          <h3 className=""> وضعیت </h3>

          <p className="mt-2">{Gregorian_to_jalali(i.date)}</p>
          <p className="mt-2">{i.light_color} </p>
          <p className="mt-2">{i.light_intensity} </p>
          <p className="mt-2">{i.total_lighting_hours} </p>
          <div className='mt-2 mx-[6%] w-[88%] '>
            {i.lighting_hours.map((i,index)=><div key={index} className='text-sm'>{i.start_time}-{i.end_time} </div>)}
          </div>
          <div className="mt-2"><StatusT status={i.status} /> </div>
        </div>
        <div className="flex justify-between -mb-10 w-[102%] ">
          <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت </div>
          <div className="">
          { i.status == 'PENDING' && <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>}
            { i.status == 'PENDING' && <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>}
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
</>
)}
export default O_LightClock