import React,{ useState, useEffect } from 'react'
import DatePickerF from '../../../components/DatePickerF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Fetch from '../../../components/Fetch';
import HerdAge from '../../../components/HerdAge';
import { useContext } from 'react';
import { myContext } from '../../../context';

const Seed = () => {
  const [date, setdate] = useState('')
  const [date2, setdate2] = useState('')
  const [startAge,setStartAge]=useState('')
  const [endAge,setEndAge]=useState('')
  const [number, setnumber] = useState('')
  const [data,setdata]=useState([])
  const [show, setshow] = useState(false)
  const navigate=useNavigate()
  const [valueStart,setvalueStart] = useState('')
  const [valueEnd,setvalueEnd]=useState('')
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  const {access,refresh}=useContext(myContext)
  function putOff(){
    setvalueStart('');setdate('');setnumber('');setvalueEnd('')
    setshow(false)
  }
  useEffect(()=>{
    
    date && HerdAge(setStartAge,date,params.EpochId,access)
  },[date])
  useEffect(()=>{
   date2 && HerdAge(setEndAge,date2,params.EpochId,access)
  },[date2])
  const save =async()=>{
    if(valueEnd.dayOfBeginning - valueStart.dayOfBeginning >=0 && date && date2){
      const body={ epoch_id:params.EpochId,start_date:date, end_date: date2,start_age:startAge,end_age:endAge, amount:number*1 }
    const token=true
    const method='POST'
    const api=`/api/v1/feed/`
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
    putOff()
    }
    else{
      alert('تاریخ پایان نمی تواند قبل از تاریخ شروع باشد')
    }
    
  }
  

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> مقدار دان مصرفی </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b max-sm:w-10 ">
    <Link className='flex items-center max-sm:text-[11px]' to={`${param}/V_SeedV`}> مشاهده تاریخچه </Link>
  </div>
    <div className="card1 max-sm:h-28">
      <div className="grid grid-cols-3 text-center lg:gap-4 gap-2 mx-auto items-end">
        <h5 className="-m-2 max-sm:text-[11px] max-sm:ml-2">میزان دان مصرفی  (کیلوگرم)</h5>
        <h5 className="-m-2 max-sm:text-[12px] max-sm:ml-2">روز شروع</h5>
        <h5 className="-m-2 max-sm:text-[12px] ">روز پایان</h5>
        <input className='max-sm:w-14 max-sm:h-7' type="number" value={number} onChange={e => setnumber(e.target.value)} />
        <span className=" max-sm:-mr-4">
          <DatePickerF setdate={setdate} value={valueStart} setvalue={setvalueStart} />
        </span>
        <DatePickerF setdate={setdate2} value={valueEnd} setvalue={setvalueEnd} />
      </div>
      <div className="flex mr-4 max-sm:flex-col-reverse max-sm:justify-end max-sm:-my-2">
        <button className='btn-r lg:mx-2 mx-1 max-sm:w-10 max-sm:mt-1' onClick={putOff}>انصراف</button>
        <button className={valueStart &&valueEnd&&number?'btn-g max-sm:mr-1 ':'btn-g opacity-60 max-sm:mr-1'} onClick={save} disabled={valueStart && valueEnd&&number?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default Seed