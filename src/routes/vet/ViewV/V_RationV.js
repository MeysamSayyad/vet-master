import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import RationT from '../../../components/en_to_fa/RationT'
import { Btndel } from '../../../components/BtnDel'

const V_RationV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  const [loading,setLoading]=useState(true)
  const Location = useLocation();
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/ration/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate,setLoading)
  },[])

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>:(
  <div className='flex flex-col text-center mt-4 '>
    {data.map(i=>
      <div key={i.id} className="border-2 flex flex-row items-center rounded-3xl m-2 p-4 md:px-12 px-4 w-4/5 mx-auto ">
        {Location.pathname.includes("NavF")  ?
        <Btndel/>
        :
        ""
        }
        <div className="grid grid-cols-3 w-full text-center gap-4">
          <h5 className="my-2 border-l border-[#707070] "> نوع جیره </h5>
          <h5 className="my-2 border-l border-[#707070] "> مقدار </h5>
          <h5 className="my-2 gap-0 ">تاریخ</h5>
          
          <div>{i.data.map((i,index)=> <h6 key={index} className="mx-2">{<RationT ration={i.name} />} </h6>)}</div>
          <div>{i.data.map((i,index)=> <h6 key={index} className="mx-2">{i.amount} </h6>)}</div>
          <h6 className='mx-2 flex flex-col '><div>{Gregorian_to_jalali(i.date)}</div><div className='flex flex-col justify-center  border-gray-300 border-t-[1px] gap-2 '><h5 className=' font-semibold'>مجموع وزن جیره</h5><p>{i.total_weight} کیلوگرم</p></div> </h6>
        </div>
      </div>
    )}
  </div>
)}
export default V_RationV