import React,{ useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HerdAge from '../../../components/HerdAge'
import DatePickerF from '../../../components/DatePickerF';
import { useContext } from 'react';
import { myContext } from '../../../context';

const Beak = () => {
  const [date, setdate] = useState('')
  const [value,setvalue] = useState('')
  const [herd_age, setherd_age] = useState('')
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().EpochId
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  const {access,refresh}=useContext(myContext)

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,id,access)}
  },[date])

  const save =async()=>{
    const body={ "epoch_id": id, herd_age, date }
    const token=true
    const method='POST'
    const api=`/api/v1/beak-trimming/`
     Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
    putOff()
  }

  function putOff(){
    setvalue('');
    setdate('')
    setshow(false)
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> نوک چینی </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><Link className='flex items-center' to={`${param}/V_BeakV`}> مشاهده تاریخچه </Link></div>
    <div className="card1 ">
      <div className="grid grid-cols-1 text-center gap-4 mx-auto ">
        <h5 className="-m-2">تاریخ</h5>
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      <div className="">
        <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
        <button className={value?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default Beak