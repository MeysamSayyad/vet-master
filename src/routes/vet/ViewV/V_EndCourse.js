import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { myContext } from '../../../context';
import { useNavigate, useParams } from 'react-router-dom';
import Fetch from '../../../components/Fetch';



const V_EndCourse = () => {
  const [data,setdata]=useState([])
  const {epoch,access,refresh} = useContext(myContext);
  const [loading,setLoading]=useState(true)
  const navigate=useNavigate()
  const params=useParams()

  useEffect(()=>{

if(!epoch.is_active)    {
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/final-stats/?epoch_id=${params.EpochId}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)}
    else{
      setLoading(false)
    }
  },[])

return loading ? <div className='flex justify-center items-center'> 
<div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div>:(
<div className="text-xl mt-4">
    {epoch.is_active ? 
    "این قسمت فقط پس از انتهای دوره قابل مشاهده است.":
    <div className="center gap-60">
      <div className="">
        <h4 className="mt-4 drop-shadow-sm"> درصد ماندگاری گله :</h4>
        <h4 className="mt-4 drop-shadow-sm"> شاخص تولیدی مرغ گوشتی :</h4>
      </div>
      <div dir='ltr' className="">
        <p className="mt-4 drop-shadow-sm">{data.herd_survival_percentage} % </p>
        <p className="mt-4 drop-shadow-sm">{0} </p>
      </div>
    </div>
    }
</div>
)}
export default V_EndCourse