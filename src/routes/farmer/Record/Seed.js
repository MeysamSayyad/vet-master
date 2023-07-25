import React,{ useState, useEffect } from 'react'
import DatePickerF from '../../../components/DatePickerF';
import { Link, useParams } from 'react-router-dom';

const Seed = () => {
  const [date, setdate] = useState('')
  const [number, setnumber] = useState('')
  const [show, setshow] = useState(false)
  const [value,setvalue] = useState('')
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`

  const save=async()=>{

  }

  function putOff(){
    setvalue('');setdate('');setnumber('')
    setshow(false)
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> مقدار دان مصرفی </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_SeedV`}> مشاهده تاریخچه </Link></div>
    <div className="card1">
      <div className="grid grid-cols-2 text-center gap-4 mx-auto">
        <h5 className="-m-2">  وزن (kg) </h5>
        <h5 className="-m-2">تاریخ</h5>
        <input className='' type="number" value={number} onChange={e => setnumber(e.target.value)} />
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      <div className="">
        <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
        <button className={value&&number?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value&&number?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default Seed