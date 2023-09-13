import React, { useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import Fetch from '../../../components/Fetch'
import { useNavigate, Link } from 'react-router-dom'

const InfoSalon = ({setshow2, EpochId,_id }) => {
  const {setepoch,access,refresh} = useContext(myContext)
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
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
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
      Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
      setupdate(!update)
    }
  }

return (
<>
<div id='modal' onClick={(e)=> e.target.id == 'modal' && setshow2(false)} className=" bg-opacity-30 inset-0  h-screen w-screen fixed flex justify-center items-center bg-black z-10">
  <div  className="z-40 bg-white rounded-xl min-h-[408px] flex items-center  justify-center min-w-[40%] px-4 lg:p-8 lg:px-14 fixed top-[13vh] ">
    {loading ? <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div>:
    <div className='flex flex-col justify-center'>
      <h1 className="lg:text-3xl text-lg mx-auto mb-8 "> مشخصات سالن و دوره پرورش </h1>
      <div className="center gap-4 lg:gap-40">
        <div className="">
          <h4 className="mt-2"> نام سالن :</h4>
          <h4 className="mt-2"> نژاد گله :</h4>
          <h4 className="mt-2"> نام گله مادر :</h4>
          <h4 className="mt-2"> نوع مرغ :</h4>
          <h4 className="mt-2">تعداد آغازین پرنده ها :</h4>
          <h4 className="mt-2">تعداد کنونی پرنده ها :</h4>
          <h4 className="mt-2"> سن گله :</h4>
          <h4 className="mt-2"> مکان سالن :</h4>
        </div>
        <div dir='ltr' className="">
          <p className="mt-2">{data.salon_name}</p>
          <p className="mt-2">{data.herd_breed} </p>
          <p className="mt-2">{data.parent_herd_name} </p>
          <p className="mt-2">{data.hen_type === 'LAYING'?' مرغ تخمگذار ':' مرغ گوشتی '}</p>
          <p className="mt-2">{data.initial_hen_count} </p>
          <p className="mt-2">{data.current_hen_count} </p>
          <p className="mt-2">{data.herd_age} </p>
          <p className="mt-2">{data.location} </p>
        </div>
      </div>
      <div className="flex justify-center text-xs px-2 lg:px-0 lg:text-base items-center mt-7 ">
        <Link className='info_btn text-center text-black' to={`SalonId/${_id}/${param}/View`}> نمایش <span className=' hidden text-black lg:inline'>اطلاعات</span>  </Link>
        <Link className={data.is_active?'info_btn text-center text-black':'hidden'} to={`SalonId/${_id}/${param}/Record`}> ثبت <span className=' hidden text-black lg:inline'>اطلاعات</span>   </Link>
        <Link className='info_btn text-center text-black' to={`SalonId/${_id}/${param}/NavO/O_Vaccination`}> پیشنهادات </Link>
        <button className={data.is_active?'info_btn text-center text-red-500':'hidden'} onClick={ok}>  اتمام دوره <span className=' text-red-500 hidden lg:inline'>پرورش</span> </button>
      </div>
    </div>}
  </div>
  </div>
</>
)}
export default InfoSalon