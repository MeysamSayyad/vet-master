import React,{ useState,useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import { useParams, useNavigate, Link } from 'react-router-dom'
import DatePickerF from '../../../components/DatePickerF';
import { useContext } from 'react';
import { myContext } from '../../../context';

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
  const {access,refresh}=useContext(myContext)

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId,access)}
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
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
    putOff()
  }
  
return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> تلفات </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><Link className='flex items-center max-sm:text-[11px]' to={`${param}/V_LossV`}> مشاهده تاریخچه </Link></div>
    <div className="card1 ">
      <div className="grid grid-cols-2 text-center lg:gap-4 gap-2 mx-auto items-center ">
        <h5 className="-m-2 max-sm:text-[12px] max-sm:ml-2">تعداد تلفات</h5>
        <h5 className="-m-2 max-sm:text-[12px]">تاریخ</h5>
        <input className=' max-sm:w-14 max-sm:h-5' type="number" value={number} onChange={e => setnumber(e.target.value)} />
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue}/>
      </div>
      <div className="flex justify-end ">
        <button className='btn-r lg:mx-2 mx-1 max-sm:w-10' onClick={putOff}>انصراف</button>
        <button className={value?'btn-g max-sm:w-10':'btn-g opacity-60 max-sm:w-10'} onClick={save} disabled={value?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default Loss