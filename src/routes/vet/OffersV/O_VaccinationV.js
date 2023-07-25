import React,{ useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import UseT from '../../../components/en_to_fa/UseT'
import VacccineT from '../../../components/en_to_fa/VacccineT'
import StatusT from '../../../components/en_to_fa/StatusT'

const O_VaccinationV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  const {updateG} = useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/suggestions/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[updateG])
  
if(data.length === 0)return <h1 className="text"> پیشنهادی هنوز ثبت نشده</h1>
return (
<div className="flex justify-center">
  <div className="flex flex-col text-center">
    {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 mb-4 p-5 md:px-14 px-4 max-w-[700px] ">
      <div className="grid grid-cols-5 text-center mb-4">
        <h5 className="mb-2 border-l px-2">نام واکسن</h5>
        <h5 className="mb-2 border-l px-2">طریقه مصرف</h5>
        <h5 className="mb-2 border-l px-2">سن</h5>
        <h5 className="mb-2 border-l px-2">تاریخ</h5>
        <h3 className="mb-2"> وضعیت : </h3>
        <h6 className=""><VacccineT vacccine={i.name} /> </h6>
        <h6 className=""><UseT use={i.how_to_use} /> </h6>
        <h6 className="">{i.herd_age} </h6>
        <h6 className="">{Gregorian_to_jalali(i.suggested_at)} </h6>
        <p className=""><StatusT status={i.status} /> </p>
      </div>
      <div className="flex -mb-[34px] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-5 ">  تاریخ ثبت {Gregorian_to_jalali(i.date)} </div>
      </div>
    </div>
    )}
  </div>
</div>
)}
export default O_VaccinationV