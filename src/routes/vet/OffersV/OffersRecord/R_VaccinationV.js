import React, { useState ,useEffect, useContext } from 'react'
import { myContext } from '../../../../context'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../../components/Fetch'
import Use from '../../../../components/option/Use'
import Vaccine from '../../../../components/option/Vaccine'
import HerdAge from '../../../../components/HerdAge';
import DatePickerV from '../../../../components/DatePickerV';

const R_BeakV = ({setshow}) => {
  const [date,setdate] = useState('2023-10-10')
  const [data,setdata] = useState([])
  const [value,setvalue] = useState('')
  const [herd_age, setherd_age] = useState('')
  const [use, setuse] = useState('EYE_DROP')
  const [name, setname] = useState('NEWCASTLE')
  const {updateG,setupdateG} = useContext(myContext)

  const location = useLocation().pathname
  const navigate =useNavigate()
  const EpochId = useParams().EpochId
  const params = useParams()
  const param = `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/OffersV`

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId)}
  },[date])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, date, name, how_to_use:use }
    const token=true
    const method='POST'
    const api=`/api/v1/vaccination/suggestions/`
    Fetch(body,token,setdata,method,api,navigate);
    setTimeout(() => {setupdateG(!updateG)}, 1000); 
    setshow(false)
  }
  
return (
<div className={location == `${param}/O_VaccinationV`? "":'hidden'}>
  <div className='grid grid-cols-3 text-center gap-4'>
    <h5 className="h-min -m-2">نام واکسن</h5>
    <h5 className="h-min -m-2">طریقه مصرف</h5>
    <h5 className="h-min -m-2">تاریخ</h5>

    <select className='h-min' onChange={e=>setname(e.target.value)}><Vaccine /> </select>
    <select className='h-min' onChange={e=>setuse(e.target.value)}><Use /> </select>
    <DatePickerV setdate={setdate} value={value} setvalue={setvalue} />
  </div>
  <div className="flex justify-end mt-10 w-[104%] ">
    <button className='btn-r mx-2' onClick={()=> setshow(false)}>انصراف</button>
    <button className={name&&use&&value?'btn-g ':'btn-g opacity-60'} disabled={name&&use&&value?false:true} onClick={save}>ثبت</button>
  </div>
</div>
)}
export default R_BeakV