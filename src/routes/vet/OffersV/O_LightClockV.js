import React,{ useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import StatusT from '../../../components/en_to_fa/StatusT'
import { Btndel } from '../../../components/BtnDel'

const O_LightClockV = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const navigate =useNavigate()
  const EpochId = useParams().EpochId
  const {updateG,access,refresh} = useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/suggestions/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[updateG])

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> پیشنهادی هنوز ثبت نشده</h1> :
(
<div className="flex justify-center text-center">
  <div className="flex flex-col">
    {data.map(i=><div key={i.id} className="border-2 rounded-xl m-2 p-6 px-10 w-[950px] h-[130px]  mb-4 relative">
      <div className='absolute right-4 top-12'>
        <Btndel/>
      </div>
      <div className="grid grid-cols-6 gap-1 mb-4">
        <h3 className="mt-2 mb-4 border-l border-[#707070] "> تاریخ </h3>
        <h3 className="mt-2 mb-4 border-l border-[#707070] "> رنگ نور </h3>
        <h3 className="mt-2 mb-4 border-l border-[#707070] "> شدت نور </h3>
        <h3 className="mt-2 mb-4 border-l border-[#707070] "> کل مدت روشنایی  </h3>
        <h3 className="mt-2 mb-4 border-l border-[#707070] "> ساعات روشنایی </h3>
        <h3 className="mt-2 mb-4"> وضعیت </h3>

        <p className="mx-2">{Gregorian_to_jalali(i.date)}</p>
        <p className="mx-2">{i.light_color} </p>
        <p className="mx-2">{i.light_intensity} </p>
        <p className="mx-2">{i.total_lighting_hours} </p>
        <p className='mx-[6%] w-[88%] '>
          {i.lighting_hours.map(i=><div className='text-sm'>{i.start_time} - {i.end_time} </div>)}
        </p>
        <p className=""><StatusT status={i.status} /> </p>
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {Gregorian_to_jalali(i.suggested_at)} </div>
      </div>
    </div>
    )}
  </div>
</div>
)}
export default O_LightClockV