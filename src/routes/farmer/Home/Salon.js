import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import InfoSalon from './InfoSalon'
import CreateSalon from './CreateSalon'
import { useContext } from 'react'
import { myContext } from '../../../context'

const Salon = ({setLoading}) => {
  const {access,refresh}=useContext(myContext)
  const [show,setshow] = useState(false)
  const [show2,setshow2] = useState(false)
  const [data,setdata] = useState([])
  const [EpochId,setEpochId] = useState('')
  const [update,setupdate] = useState(false)
  const [add, setadd] = useState(0)
  const navigate =useNavigate()
  const params=useParams()
  const _id=params.SalonId
  useEffect(()=>{
    setupdate(!update)
  },[])

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/?salon_id=${_id}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[update,add,_id])

  function creact(){
    if(data[0].is_active&&window.confirm('⚠️ساخت دوره جدید به منزله پایان یافتن دوره قبلی است ')){setshow(true)}
    if(!data[0].is_active) {setshow(true)}
  }

return (
<div className="">
  <div className='flex  '>
    <div className=" border-slate-400 w-90 min-h-[90vh] ">
      <button className='text-slate-500 lg:bold font-semibold border-[1.5px] border-slate-500 p-2 lg:px-6 px-1 mb-1  hover:bg-slate-500 transition-all hover:text-white rounded 'onClick={data.length>0?creact:()=>setshow(true)}> افزودن دوره پرورش </button> <br />
      {
        data.length === 0 ? <h2 className="text-lg my-3">هنوز دوره پرورشی وجود ندارد</h2>:
        data.map(i => <button key={i.id}
        className={i.is_active?'bg-slate-200 rounded-lg text-right p-1 lg:p-4 lg:pr-7 pr-1 pl-0 ml-2 lg:ml-5 mt-4 text-xs w-[182px] lg:w-72 items-center grid grid-cols-2 grid-rows-3 gap-1':"bg-slate-200 rounded-lg text-right p-1 lg:p-4 pr-1 lg:pr-7 pl-0 ml-2 lg:ml-5 mt-4 text-xs w-[182px] lg:w-72 grid grid-cols-2 gap-1 opacity-70" }
        onClick={()=>{setshow2(true);setEpochId(i.id)}}>
        
          <h5 className="mb-1"> تاریخ آغاز دوره :</h5>
          <h5 className="mb-1 w-[80%] ">{gregorian_to_jalali(i.start_date)} </h5>
          <h5 className="mb-1"> تاریخ پایان دوره :</h5>
          <h5 className="mb-1 w-[80%] text-xs ">{i.is_active?' در حال پرورش ':gregorian_to_jalali(i.end_date)} </h5>
          <h5 className=""> نوع مرغ :</h5>
          <h5 className="w-[80%] ">{i.hen_type === 'LAYING'?' مرغ تخمگذار ':' مرغ گوشتی '} </h5>
        
         
         
          
        
      </button>
      )}
    </div>
    {/* 2 */}
    
  </div>
  {/* modul 1*/}
  {show ? <CreateSalon id={_id} setshow={setshow} setadd={setadd} add={add} /> : ''}
  {/* modul 2*/}
  { show2 ? <InfoSalon _id={_id} EpochId={EpochId} setshow2={setshow2}/>: ''}
</div>
)}
export default Salon