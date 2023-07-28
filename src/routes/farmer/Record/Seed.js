import React,{ useState, useEffect } from 'react'
import DatePickerF from '../../../components/DatePickerF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Fetch from '../../../components/Fetch';

const Seed = () => {
  const [date, setdate] = useState('')
  const [date2, setdate2] = useState('')
  const [number, setnumber] = useState('')
  const [data,setdata]=useState([])
  const [show, setshow] = useState(false)
  const navigate=useNavigate()
  const [valueStart,setvalueStart] = useState('')
  const [valueEnd,setvalueEnd]=useState('')
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  console.log(valueStart.dayOfBeginning)

  function putOff(){
    setvalueStart('');setdate('');setnumber('');setvalueEnd('')
    setshow(false)
  }
  const save =async()=>{
    if(valueEnd.dayOfBeginning - valueStart.dayOfBeginning >0){
      const body={ epoch_id:params.EpochId,start_date:date, end_date: date2, amount:number }
    const token=true
    const method='POST'
    const api=`/api/v1/feed/`
    Fetch(body,token,setdata,method,api,navigate)
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
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_SeedV`}> مشاهده تاریخچه </Link></div>
    <div className="card1">
      <div className="grid grid-cols-3 text-center gap-4 mx-auto">
        <h5 className="-m-2">میزان دان مصرفی در یک روز (کیلوگرم)</h5>
        <h5 className="-m-2">روز شروع</h5>
        <h5 className="-m-2">روز پایان</h5>
        <input className='' type="number" value={number} onChange={e => setnumber(e.target.value)} />
        <DatePickerF setdate={setdate} value={valueStart} setvalue={setvalueStart} />
        <DatePickerF setdate={setdate2} value={valueEnd} setvalue={setvalueEnd} />
      </div>
      <div className="">
        <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
        <button className={valueStart &&valueEnd&&number?'btn-g':'btn-g opacity-60'} onClick={save} disabled={valueStart && valueEnd&&number?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default Seed