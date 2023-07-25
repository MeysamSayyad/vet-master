import React,{ useState,useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import { useParams, useNavigate, Link } from 'react-router-dom'
import DatePickerF from '../../../components/DatePickerF';

const Loss = () => {
  const [date, setdate] = useState('')
  const [number, setnumber] = useState('')
  const [show, setshow] = useState(false)
  const [value,setvalue] = useState('')
  const [herd_age, setherd_age] = useState('')
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const params = useParams()
  const EpochId = params.EpochId
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${EpochId}/View`

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId)}
  },[date])

  function putOff(){
    setvalue('');
    setdate('')
    setnumber('')
    setshow(false)
  }

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, date, count:number }
    const token=true
    const method='POST'
    const api=`/api/v1/loss/`
    Fetch(body,token,setdata,method,api,navigate)
    putOff()
  }
  
return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> تلفات </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><Link className='flex items-center' to={`${param}/V_LossV`}> مشاهده تاریخچه </Link></div>
    <div className="card1 ">
      <div className="grid grid-cols-2 text-center gap-4 mx-auto ">
        <h5 className="-m-2">تعداد تلفات</h5>
        <h5 className="-m-2">تاریخ</h5>
        <input className='' type="number" value={number} onChange={e => setnumber(e.target.value)} />
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      <div className="flex justify-end ">
        <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
        <button className={value?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default Loss