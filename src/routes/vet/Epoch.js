import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../components/Fetch'
import InfoSalon from './InfoSalonV'

const Epoch = () => {
  const [data,setdata] = useState([])
  const [show,setshow] = useState(false)
  const [EpochId,setEpochId] = useState('')
  const navigate =useNavigate()
  const id = useParams().salonId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/?salon_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

if(data.length === 0) return <h1 className="text">دوره ای وجود ندارد</h1>
return (
<>
  <div className='center'>
    <div className="w-96 min-h-[90vh] ">
      {
        data.length === 0 ? '':
        data.reverse().map(i => <div key={i.id} className={i.end_date === null?'card2':"card2 opacity-70" } onClick={()=>{setshow(true); setEpochId(i.id)}}>
        <div>
          <h5 className="mb-1"> تاریخ آغاز دوره : </h5>
          <h5 className="mb-1"> تاریخ پایان دوره : </h5>
          <h5 className=""> نوع مرغ : </h5>
        </div>
        <div>
          <h5 className="mb-1">{i.start_date} </h5>
          <h5 className="mb-1">{i.end_date?'i.end_date':'در حال پرورش'} </h5>
          <h5 className="">{i.hen_type} </h5>
        </div>
      </div>
      )}
    </div>
  </div>
  {show? <InfoSalon setshow={setshow} EpochId={EpochId} />: ''}
  
</>
)}
export default Epoch