import React,{ useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HerdAge from '../../../components/HerdAge';
import DatePickerF from '../../../components/DatePickerF';
import Fetch from '../../../components/Fetch'
import Use from '../../../components/option/Use'
import Vaccine from '../../../components/option/Vaccine'

const Vaccination = () => {
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [use, setuse] = useState('EYE_DROP')
  const [name, setname] = useState('NEWCASTLE')
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,epoch_id)}
  },[date])
  
  const save =async()=>{
    const body={ epoch_id, herd_age, date, name, how_to_use: use}
    const token=true
    const method='POST'
    const api=`/api/v1/vaccination/`
    Fetch(body,token,setdata,method,api,navigate)
    putOff()
  }

  function putOff(){
    setvalue('');
    setdate('')
    setuse('')
    setname('')
    setshow(false)
  }
  
return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> واکسیناسیون </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_VaccinationV`}> مشاهده تاریخچه </Link></div>
    <div className="card1">
      <div className="grid grid-cols-3 text-center gap-4 mx-auto ">
        <h5 className="-m-2">نام واکسن</h5>
        <h5 className="-m-2">طریقه مصرف</h5>
        <h5 className="-m-2">تاریخ</h5>

        <select onChange={e=>setname(e.target.value)}><Vaccine /> </select>
        <select onChange={e=>setuse(e.target.value)}><Use /> </select>
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      <div className="flex mr-2">
        <button className='btn-r ml-2' onClick={putOff}>انصراف</button>
        <button className={value&&name&&use?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value&&name&&use?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default Vaccination