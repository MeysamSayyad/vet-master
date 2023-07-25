import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import InfoSalon from './InfoSalon'
import CreateSalon from './CreateSalon'
import { Cookies } from 'react-cookie'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Salon = () => {
  const [show,setshow] = useState(false)
  const [show2,setshow2] = useState(false)
  const [data,setdata] = useState([])
  const [EpochId,setEpochId] = useState('')
  const [update,setupdate] = useState(false)
  const [add, setadd] = useState(0)
  const navigate =useNavigate()
  const _id = useParams().SalonId
  const cookie = new Cookies()

  useEffect(()=>{
    setupdate(!update)
  },[])

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/?salon_id=${_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[update,add])

  const chart ={
    labels : [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [
          'rgba(111 255 241)',
        ],
        borderColor: [
          'rgb(111 255 241)',
        ],
        borderWidth: 1,
        hoverBackgroundColor:['rgba(111 25 241)'],
        hoverBorderWidth:0,
      },
    ]
  }

  function creact(){
    if(data[0].is_active&&window.confirm('⚠️ساخت دوره جدید به منزله پایان یافتن دوره قبلی است ')){setshow(true)}
    if(!data[0].is_active) {setshow(true)}
  }

return (
<div className="">

  <div className='flex justify-around '>
    <div className="border-l border-slate-400 w-96 min-h-[90vh] ">
      <button className='text-slate-500 bold border-[1.5px] border-slate-500 p-2 px-6 mb-1 italic rounded 'onClick={data.length>0?creact:()=>setshow(true)}> افزودن دوره پرورش </button> <br />
      {
        data.length === 0 ? <h2 className="text-lg my-3">هنوز دوره پرورشی وجود ندارد</h2>:
        data.map(i => <button key={i.id}
        className={i.is_active?'card2':"card2 opacity-70" }
        onClick={()=>{setshow2(true);setEpochId(i.id)}}>
        <div>
          <h5 className="mb-1"> تاریخ آغاز دوره : </h5>
          <h5 className="mb-1"> تاریخ پایان دوره : </h5>
          <h5 className=""> نوع مرغ : </h5>
        </div>
        <div>
          <h5 className="mb-1">{gregorian_to_jalali(i.start_date)} </h5>
          <h5 className="mb-1">{i.is_active?' در حال پرورش ':gregorian_to_jalali(i.end_date)} </h5>
          <h5 className="">{i.hen_type === 'LAYING'?' مرغ تخمگذار ':' مرغ گوشتی '} </h5>
        </div>
      </button>
      )}
    </div>
    {/* 2 */}
    <div className="w-[60%] ">
      <Bar data={chart} />
      <br />
      <Bar data={chart} />
    </div>
  </div>
  {/* modul 1*/}
  {show ? <CreateSalon id={_id} setshow={setshow} setadd={setadd} add={add} /> : ''}
  {/* modul 2*/}
  { show2 ? <InfoSalon EpochId={EpochId} setshow2={setshow2}/>: ''}
</div>
)}
export default Salon