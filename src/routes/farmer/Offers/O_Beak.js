/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import { myContext } from '../../../context'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import StatusT from '../../../components/en_to_fa/StatusT'

const O_Beak = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const navigate =useNavigate()
  const EpochId=useParams().EpochId
  const {access,refresh}=useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/beak-trimming/suggestions/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[])


return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>:(
<>
  <h2 className=" text-center text-2xl mb-4"> تاریخ های پیشنهادی دامپزشک برای نوک چینی </h2>

  <div className="flex justify-center flex-col text-center">
    {data.map((i,index) =>
      <div key={index} className="border-2 rounded-xl xl:w-[30vw] w-[40vw] m-4 p-3.5 px-7 max-w-[800px] mx-auto ">
        {/* <div className="flex justify-end -mt-7 ">
          <div className="border-2 rounded-full text-sm text-slate-600 px-4 pt-0.5 w-min">
            {i.status}
          </div>
        </div> */}
        <div className="mb-4 grid grid-cols-3 grid-rows-2 ">
          
            <h4 className="my-2">تاریخ</h4>
            <h4 className="my-2">سن</h4>
            <h3 className="my-2"> وضعیت </h3>
          
            <p className="my-2">{Gregorian_to_jalali(i.date)} </p>
            <p className="my-2">{i.herd_age} </p>
            <div className="mt-2"><StatusT status={i.status} /> </div>
          
        </div>
        <div className="flex justify-between -mb-[30px] ">
          <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 "> تاریخ ثبت {Gregorian_to_jalali(i.suggested_at)}</div>
          <div className="">
          { i.status == 'PENDING' && <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>}
            { i.status == 'PENDING' && <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>}
          </div>
        </div>
      </div>
    )}
  </div>
</>
)}
export default O_Beak