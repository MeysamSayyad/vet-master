import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import VacccineT from '../../../components/en_to_fa/VacccineT'
import UseT from '../../../components/en_to_fa/UseT'
import { Btndel } from '../../../components/BtnDel'

const V_VaccinationV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  const [loading,setLoading]=useState(true)
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate,setLoading)
  },[])
  

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>:(
<div className="flex justify-center">
  <div className="flex justify-center flex-col text-center">
    {data.map((i,index)=>
      <div key={index} className="border-2 rounded-3xl flex justify-center items-center flex-row xl:w-[60vw] m-2 p-5 md:px-14 px-4 ">
        <Btndel/>
        <div className="grid grid-cols-4 w-full text-center gap-4">
          <h5 className="-m-2 border-l px-1 ">نام واکسن</h5>
          <h5 className="-m-2 border-l px-1 ">طریقه مصرف</h5>
          <h5 className="-m-2 border-l px-1 ">سن</h5>
          <h5 className="-m-2 px-1 ">تاریخ</h5>
          <h6 className="px-1"><VacccineT vacccine={i.name} /> </h6>
          <h6 className="px-1"><UseT use={i.how_to_use} /> </h6>
          <h6 className="px-1">{i.herd_age} </h6>
          <h6 className="px-1">{Gregorian_to_jalali(i.date)} </h6>
        </div>
      </div>
    )}
  </div>
</div>
)}
export default V_VaccinationV