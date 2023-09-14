import React, { useState ,useEffect, useContext } from 'react'
import { myContext } from '../../../../context'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import HerdAge from '../../../../components/HerdAge';
import Fetch from '../../../../components/Fetch'
import DatePickerV from '../../../../components/DatePickerV';
import TimePicker from 'react-time-picker';

const R_LightClockV = ({setshow}) => {
  const [update,setupdate] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const [date, setdate] = useState('')
  const [value,setvalue] = useState('')
  const [light_intensity, setlight_intensity] = useState('')
  const [light_color, setlight_color] = useState('')
  const [hours, sethours] = useState([{start_time:null,end_time:null}])
  const {updateG,setupdateG,access,refresh} = useContext(myContext)

  const location = useLocation().pathname
  const params = useParams()
  const param = `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/OffersV`
  const EpochId = useParams().EpochId
  const navigate =useNavigate()
 

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId,access)}
  },[date])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, date, light_color, light_intensity, lighting_hours:hours }
    const token=true
    const method='POST'
    const api=`/api/v1/lighting/suggestions/`
    if(value&&light_color&&light_intensity){Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh); setshow(false)}
    setTimeout(() => {setupdateG(!updateG)}, 1000); 
  }

  const plus =()=> {
    hours.push({start_time:null,end_time:null})
    setupdate(!update)
  }

return (
<div className={location == `${param}/O_LightClockV`?'':'hidden'}>
  <div className="grid grid-cols-3 text-center gap-y-2 justify-center items- gap-x-2 lg:gap-4 ">
    <h5 className="-m-2">رنگ نور</h5>
    <h5 className="-m-2"> شدت نور </h5>
    <h5 className="-m-2">تاریخ</h5>
    <input className='w-[95px] lg:w-auto'  value={light_color} onChange={e => setlight_color(e.target.value)} />
    <input className=' w-[95px] lg:w-auto' type="number" value={light_intensity} onChange={e => setlight_intensity(e.target.value)} />
    <DatePickerV setdate={setdate} value={value} setvalue={setvalue} />
  </div>
  {/*  */}
  <div className=' overflow-y-scroll lg:overflow-hidden max-h-[150px] lg:max-h-auto'>
  {hours.map((i,inx)=>{
    return <div key={inx} className="w-full flex flex-col lg:block center my-4 ">
      <span className='mx-2'>از</span>
      <TimePicker className=' w-[170px] h-[30px]' disableClock={true} renderSecondHand={false} value={i.start_time} format='m:H' onChange={value=> { hours[inx].start_time = value; sethours(hours); setupdate(!update)}} />
          <span className='mx-2'>تا</span>
          <TimePicker  className=' w-[170px] h-[30px]' disableClock={true} renderSecondHand={false} format='m:H' value={i.end_time} onChange={value=> {hours[inx].end_time = value; sethours(hours); setupdate(!update)}} />
    </div>}
  )}

  {/*  */}
  <div className="center w-full -mt-4">
    <button className="text-4xl px-2 text-center " onClick={plus}> + </button>
  </div>
  </div>
  <div className="flex justify-end mt-10 w-[104%] ">
    <button className='btn-r mx-2' onClick={()=> setshow(false)}>انصراف</button>
    <button className={value&&light_color&&light_intensity?'btn-g ':'btn-g opacity-60 '} disabled={value&&light_color&&light_intensity?false:true} onClick={save}>ثبت</button>
  </div>
</div>
)}
export default R_LightClockV