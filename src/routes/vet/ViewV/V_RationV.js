import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import RationT from '../../../components/en_to_fa/RationT'

const V_RationV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/ration/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])
  
if(data.length === 0)return <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>
return (
  <div className='flex flex-col text-center mt-4 '>
    {data.map(i=>
      <div key={i.id} className="border-2 rounded-3xl m-2 p-4 md:px-12 px-4 w-4/5 mx-auto ">
        <div className="grid grid-cols-3 text-center gap-4">
          <h5 className="my-2 border-l border-[#707070] "> نوع جیره </h5>
          <h5 className="my-2 border-l border-[#707070] "> مقدار </h5>
          <h5 className="my-2 ">تاریخ</h5>
          
          <div>{i.data.map((i)=> <h6 className="mx-2">{<RationT ration={i.name} />} </h6>)}</div>
          <div>{i.data.map((i)=> <h6 className="mx-2">{i.amount} </h6>)}</div>
          <h6 className='mx-2'>{Gregorian_to_jalali(i.date)} </h6>
        </div>
      </div>
    )}
  </div>
)}
export default V_RationV