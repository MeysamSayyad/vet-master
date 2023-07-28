/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import { Btndel } from '../../../components/BtnDel'

const O_BeakV = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const navigate = useNavigate()
  const id = useParams().EpochId
  const {updateG} = useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/beak-trimming/suggestions/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate, setLoading)
  },[updateG])

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> پیشنهادی هنوز ثبت نشده</h1> :
(
<div className="flex justify-center text-center">
  <div className="flex flex-col">
  {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 p-5 md:px-16 px-4 max-w-[700px] flex flex-row items-end relative">
      <div className='absolute right-4'>
        <Btndel/>
      </div>
      
      <div>
        <h2 className="text-lg text-orange-500"> {i.herd_age} روزگی </h2>
        <h2 className="">
          نوک چینی در تاریخ {Gregorian_to_jalali(i.suggested_at)}
          <span className={i.status ==='DONE'?'text-green-500 bold':'hidden'}> انجام شد </span>
          <span className={i.status === 'REJECTED'?'text-red-600 bold':'hidden'}> انجام نشد </span>
          <span className={i.status === 'PENDING'?'text-yellow-400 bold':'hidden'}> در انتظار انجام است </span>
        </h2>
      </div>

    </div>
  )}
  </div>
</div>
)}
export default O_BeakV