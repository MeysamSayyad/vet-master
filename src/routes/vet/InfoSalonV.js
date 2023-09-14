import React, { useState, useEffect, useContext } from 'react'
import { myContext } from '../../context'
import Fetch from '../../components/Fetch'
import { useNavigate, Link , useParams } from 'react-router-dom'

const InfoSalon = ({setshow, EpochId }) => {
  const {setepoch,access,refresh} = useContext(myContext)
  const [data,setdata] = useState('')
  const [update,setupdate] = useState(false)
  const navigate =useNavigate()
  const userId = useParams().userId;
  const salonId = useParams().salonId;
  
  useEffect(()=>{
    setupdate(!update)
  },[])

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/detail/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
  },[update])
  if (data !== ''){setepoch(data)}
return (
<>
<div id='modal' onClick={(e)=> e.target.id == 'modal' &&setshow(false)} className=" backdrop opacity-100 bg-opacity-30">
  <div className="center absolute right-0 left-0"> 
    <div className="z-40 bg-white rounded-xl p-8 lg:px-14  px-4 fixed top-[10vh]">
      <h1 className="lg:text-3xl text-lg bold lg:font-normal lg:mx-28 mb-8 "> مشخصات سالن و دوره پرورش </h1>
      <div className="center grid grid-cols-2 justify-center gap-2 lg:gap-2">
        
          <h4 className="mt-2"> نام سالن :</h4>
          <p className="mt-2">{data.salon_name}</p>
          <h4 className="mt-2"> نژاد گله :</h4>
          <p className="mt-2">{data.herd_breed} </p>
          <h4 className="mt-2"> نام گله مادر :</h4>
          <p className="mt-2">{data.parent_herd_name} </p>
          <h4 className="mt-2"> نوع مرغ :</h4>
          <p className="mt-2">{data.hen_type === 'LAYING'?' مرغ تخمگذار ':' مرغ گوشتی '}</p>
          <h4 className="mt-2">تعداد آغازین پرنده ها :</h4>
          <p className="mt-2">{data.initial_hen_count} </p>

          <h4 className="mt-2">تعداد کنونی پرنده ها :</h4>
          <p className="mt-2">{data.current_hen_count} </p>
          <h4 className="mt-2"> سن گله :</h4>
          <p className="mt-2">{data.herd_age} </p>
          <h4 className="mt-2"> مکان سالن :</h4>
          <p className="mt-2">{data.location} </p>

        
      </div>
      <div className="flex justify-center mt-7 ">
        <Link className='info_btn text-black' to={`userId/${userId}/salonId/${salonId}/EpochId/${EpochId}/ViewV`}> نمایش اطلاعات </Link>
        <Link className='info_btn text-black' to={`userId/${userId}/salonId/${salonId}/EpochId/${EpochId}/OffersV/O_VaccinationV`}> پیشنهادات </Link>
      </div>
    </div>
  </div>
  </div>
</>
)}
export default InfoSalon