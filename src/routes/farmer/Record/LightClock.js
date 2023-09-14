import React,{ useState,useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { myContext } from '../../../context';
import HerdAge from '../../../components/HerdAge';
import { useParams, useNavigate, Link } from 'react-router-dom'
import DatePickerF from '../../../components/DatePickerF';
import { useContext } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const LightClock = () => {
  const [update,setupdate] = useState(false)
  const [show,setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const [date, setdate] = useState('')
  const [value,setvalue] = useState('')
  const [light_intensity, setlight_intensity] = useState('')
  const [light_color, setlight_color] = useState('')
  const [hours, sethours] = useState([{start_time:null,end_time:null}])
  const navigate =useNavigate()
  const params = useParams()
  const EpochId = useParams().EpochId
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${EpochId}/View`
  const {access,refresh}=useContext(myContext)
  
  function putOff(){
    setvalue('');
    setdate('')
    setlight_intensity('')
    setlight_color('')
    sethours([{start_time:'',end_time:''}])
    setshow(false)
  }

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId,access)}
  },[date])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, date, light_color, light_intensity, lighting_hours:hours }
    const token=true
    const method='POST'
    const api=`/api/v1/lighting/`
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
    putOff()
  }

  const plus =()=> {
    hours.push({start_time:'00:00',end_time:'00:00'})
    setupdate(!update)
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> ساعات روشنایی </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b max-sm:w-10">
      <Link className='flex items-center max-sm:text-[11px]' to={`${param}/V_LightClockV`}> مشاهده تاریخچه </Link>
    </div>
    <div className="card1 lg:flex-wrap max-sm:flex max-sm:flex-col">
      <div className="grid grid-cols-3 text-center lg:gap-4 gap-2 mx-auto items-center ">
        <h5 className="-m-2 max-sm:-mr-6 max-sm:text-[12px] max-sm:ml-2">رنگ نور</h5>
        <h5 className="-m-2 max-sm:-mr-6 max-sm:text-[12px] max-sm:ml-2"> شدت نور  (lx)</h5>
        <h5 className="-m-2 max-sm:text-[12px] max-sm:ml-2">تاریخ</h5>
        <input className='max-sm:w-14 max-sm:h-7'  value={light_color} onChange={e => setlight_color(e.target.value)} />
        <input className='max-sm:w-14 max-sm:h-7' type="number" value={light_intensity} onChange={e => setlight_intensity(e.target.value)} />
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      {hours.map((i,inx)=>{
        return <div key={inx} className="w-full center my-4 ">
          <span className='mx-2 max-sm:text-[12px]'>از</span>
          
          <TimePicker className=' lg:w-[170px]  lg:h-[30px] h-7' renderSecondHand={false} value={i.start_time} format='m:H' onChange={value=> { hours[inx].start_time = value; sethours(hours); setupdate(!update)}} />
          <span className='mx-2 max-sm:text-[12px]'>تا</span>
          <TimePicker className=' lg:w-[170px]  lg:h-[30px] h-7' renderSecondHand={false} format='m:H' value={i.end_time} onChange={value=> {hours[inx].end_time = value; sethours(hours); setupdate(!update)}} />
        </div>}
      )}
      <div className="center w-full -mt-4">
        <button className="lg:text-4xl lg:px-2 text-center text-[20px] px-1 " onClick={plus}>+</button>
      </div>
      <div className="flex justify-end w-full max-sm:justify-end ">
        <button className='btn-r lg:mx-2 mx-1 max-sm:w-10' onClick={putOff}>انصراف</button>
        <button className={value?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default LightClock