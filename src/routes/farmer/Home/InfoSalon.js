import React, { useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import Fetch from '../../../components/Fetch'
import { useNavigate, Link } from 'react-router-dom'

const InfoSalon = ({setshow2, EpochId,_id }) => {
  const {epoch,setepoch} = useContext(myContext)
  const [data,setdata] = useState('')
  const [loading,setLoading]=useState(true)
  const [update,setupdate] = useState(false)
  const navigate =useNavigate()
  const param = `EpochId/${EpochId}`
  useEffect(()=>{
    setupdate(!update)
  },[])

  useEffect(()=>{
   
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/detail/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate,setLoading)
  },[update])
  useEffect(()=>{
    if (data !== ''){setepoch(data)}
  },[data])
  

  
  function ok(){
    const body={ epoch_id: EpochId }
    const token=true
    const method='POST'
    const api=`/api/v1/epochs/end/`

    if(window.confirm(' آیا از این کار اطمینان دارید این عمل غیر قابل بازگشت است')) {
      Fetch(body,token,setdata,method,api,navigate)
      setupdate(!update)
    }
  }

return (
<>
<div onClick={()=> setshow2(false)} className=" bg-opacity-30 inset-0 w-screen h-screen fixed flex justify-center items-center bg-black z-10">
  
    <div className="z-40 bg-white rounded-xl min-h-[408px] flex items-center  justify-center min-w-[696px] p-8 px-14 fixed top-[10vh] ">
      {loading ? <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div>:<div>
      <h1 className="text-3xl mx-28 mb-8 "> مشخصات سالن و دوره پرورش </h1>
      <div className="center gap-40">
        <div className="">
          <h4 className="mt-2"> نام سالن :</h4>
          <h4 className="mt-2"> نژاد گله :</h4>
          <h4 className="mt-2"> نام گله مادر :</h4>
          <h4 className="mt-2"> نوع مرغ :</h4>
          <h4 className="mt-2"> تعداد کل پرنده :</h4>
          <h4 className="mt-2"> سن گله :</h4>
          <h4 className="mt-2"> مکان سالن :</h4>
        </div>
        <div dir='ltr' className="">
          <p className="mt-2">{data.salon_name}</p>
          <p className="mt-2">{data.herd_breed} </p>
          <p className="mt-2">{data.parent_herd_name} </p>
          <p className="mt-2">{data.hen_type === 'LAYING'?' مرغ تخمگذار ':' مرغ گوشتی '}</p>
          <p className="mt-2">{data.current_hen_count} </p>
          <p className="mt-2">{data.herd_age} </p>
          <p className="mt-2">{data.location} </p>
        </div>
      </div>
      <div className="flex justify-center mt-7 ">
        <Link className='info_btn text-black' to={`SalonID/${_id}/${param}/View`}> نمایش اطلاعات </Link>
        <Link className={data.is_active?'info_btn text-black':'hidden'} to={`SalonID/${_id}/${param}/Record`}> ثبت اطلاعات  </Link>
        <Link className='info_btn text-black' to={`SalonID/${_id}/${param}/NavO`}> پیشنهادات </Link>
        <button className={data.is_active?'info_btn text-red-500':'hidden'} onClick={ok}> اتمام دوره پرورش </button>
      </div>
    </div>}
      
    </div>
  </div>
</>
)}
export default InfoSalon