import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import UseT from '../../../components/en_to_fa/UseT'
import VacccineT from '../../../components/en_to_fa/VacccineT'
import StatusT from '../../../components/en_to_fa/StatusT'

const O_Vaccination = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/suggestions/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])
  
if(data.length === 0)return <h1 className="text"> پیشنهادی وجود ندارد</h1>
return (
<>
  <h2 className=" text-center text-2xl mb-4"> واکسیناسیون پیشنهادی دامپزشک </h2>
  <div className='center'>
    <div className="flex flex-col text-center">
      {data.map(i=>
      <div className="border-2 rounded-xl w-[65vw] m-2 p-3.5 px-7 max-w-[800px] mb-4">
        <div className="grid grid-cols-5 ">
          <h3 className=" border-l px-1"> نام واکسن </h3>
          <h3 className=" border-l px-1"> طریقه مصرف </h3>
          <h3 className=" border-l px-1"> سن </h3>
          <h3 className=" border-l px-1"> تاریخ </h3>
          <h3 className=""> وضعیت </h3>

          <h6 className="mt-2"><VacccineT vacccine={i.name} /> </h6>
          <h6 className="mt-2"><UseT use={i.how_to_use} /> </h6>
          <h6 className="mt-2">{i.herd_age} </h6>
          <h6 className="mt-2">{Gregorian_to_jalali(i.suggested_at)} </h6>
          <p className="mt-2"><StatusT status={i.status} /> </p>
        </div>
        {/* <p className="text-right mt-4">llllllllllll</p> <br /> */}
        <div className="flex justify-between -mb-[30px] w-[100%] ">
          <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 "> تاریخ ثبت {Gregorian_to_jalali(i.date)} </div>
          <div className="">
            <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>
            <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
</>
)}
export default O_Vaccination