import React, { useState ,useEffect, useContext } from 'react'
import { myContext } from '../../../../context'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../../components/Fetch'
import DatePickerV from '../../../../components/DatePickerV';
import HerdAge from '../../../../components/HerdAge';

const R_BeakV = ({setshow}) => {
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const location = useLocation().pathname
  const navigate =useNavigate()
  const EpochId = useParams().EpochId
  const params = useParams()
  const param = `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/OffersV`
  const {updateG,setupdateG} = useContext(myContext)

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId)}
  },[date])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, date}
    const token=true
    const method='POST'
    const api=`/api/v1/beak-trimming/`
    Fetch(body,token,setdata,method,api,navigate)
    setTimeout(() => {setupdateG(!updateG)}, 1000); 
    setshow(false)
  }
  
return (
<div className={location == `${param}/O_BeakV`?'':'hidden'}>
  <div className='flex'>
    در تاریخ
    <DatePickerV setdate={setdate} value={value} setvalue={setvalue} />
    نوک چینی را انجام دهید
  </div>
  <div className="flex justify-end mt-10 w-[104%] ">
    <button className='btn-r mx-2' onClick={()=> setshow(false)}>انصراف</button>
    <button className={value?'btn-g ':'btn-g opacity-60'} disabled={date?false:true} onClick={save}>ثبت</button>
  </div>
</div>
)}
export default R_BeakV