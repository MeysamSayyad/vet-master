import React,{ useState, useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import { Btndel } from '../../../components/BtnDel';
import { useContext } from 'react';
import { myContext } from '../../../context';

const V_BeakV = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const navigate =useNavigate()
  const id = useParams().EpochId
  const Location = useLocation();
  const {access,refresh}=useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/beak-trimming/suggestions/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[])


return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>:(
<div className="center">
  <div className="flex flex-col text-center">
    {data.map((i,index) => 
      <div key={index} className="border-2 rounded-3xl flex flex-row gap-1 m-2 p-5 md:px-24 px-4 max-w-[700px]">
        {Location.pathname.includes("NavF")  ?
          <div className='pl-4'>
            <Btndel/>
          </div>
        :
        ""
        }
        <h2 className="">
        نوک چینی در تاریخ <span className='mx-1' dir='ltr'>{Gregorian_to_jalali(i.date)}</span> انجام شد 
        </h2>
      </div>
    )}
  </div>
</div>
)}
export default V_BeakV