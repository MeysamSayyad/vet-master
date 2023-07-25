import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import RationT from '../../../components/en_to_fa/RationT'
import StatusT from '../../../components/en_to_fa/StatusT'

const O_Ration = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const EpochId = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/ration/suggestions/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate) 
  },[])

if(data.length === 0)return <h1 className="text"> پیشنهادی وجود ندارد</h1>
return (
<>
  <h2 className=" text-center text-2xl mb-4"> جیره های پیشنهادی دامپزشک </h2>

  <div className='flex flex-col text-center mt-4 '>
  {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 p-4 md:px-12 px-4 w-4/5 mb-6 mx-auto ">
      <div className="grid grid-cols-4 text-center gap-4">
        <h5 className="my-2 border-l border-[#707070] "> نوع جیره </h5>
        <h5 className="my-2 border-l border-[#707070] "> مقدار </h5>
        <h5 className="my-2 border-l border-[#707070] ">تاریخ</h5>
        <h3 className="my-2 "> وضعیت </h3>

        <div>{i.data.map((i,inx)=> <h6 key={inx} className="mx-2"><RationT ration={i.name} /> </h6>)}</div>
        <div>{i.data.map((i,inx)=> <h6 key={inx} className="mx-2">{i.amount} </h6>)}</div>
        <h6 className='mx-2'>{Gregorian_to_jalali(i.date)} </h6>
        <p className="mt-2"><StatusT status={i.status} /> </p>
      </div>

      <div className="flex justify-between -mb-[32px] mt-2 w-[102%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {Gregorian_to_jalali(i.suggested_at)} </div>
          <div className="">
            <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>
            <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>
          </div>
        </div>
    </div>
  )}
</div>
</>
)}
export default O_Ration