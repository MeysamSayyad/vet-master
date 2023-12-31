import React,{ useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import RationT from '../../../components/en_to_fa/RationT'
import StatusT from '../../../components/en_to_fa/StatusT'
import { Btndel } from '../../../components/BtnDel'


const O_RationV = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  const {updateG,access,refresh} = useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/ration/suggestions/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[updateG])

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> پیشنهادی هنوز ثبت نشده</h1> :
(
<div className='flex flex-col text-center mt-4 '>
  {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 p-4 md:px-12 px-1 lg:px-4 lg:w-4/5 mb-6 mx-auto relative">
      <div className='absolute left-3 bottom-0 lg:bottom-auto lg:left-auto lg:right-4 lg:top-12'>
        <Btndel/>
      </div>
      <div className="grid grid-cols-5 text-xs lg:text-base text-center lg:gap-4">
        <h5 className="mt-2 mb-1 border-l border-[#707070] "> نوع جیره </h5>
        <h5 className="my-2 border-l border-[#707070] "> مقدار </h5>
        <h5 className="my-2 border-l border-[#707070] ">تاریخ</h5>
        <h5 className=' font-semibold my-2 border-l border-[#707070]'>مجموع وزن جیره</h5>
        <h3 className="my-2 "> وضعیت </h3>

        <div>{i.data.map((i)=> <h6 className="mx-2 mb-2" key={i.id}><RationT ration={i.name} /> </h6>)}</div>
        <div>{i.data.map((i)=> <h6 className="mx-2" key={i.id}>{i.amount} </h6>)}</div>
        <h6 className='mx-2'>{Gregorian_to_jalali(i.date)} </h6>
        <div className='flex flex-col gap-2 justify-start'><p>{i.total_weight} کیلوگرم</p></div>
        <p className=""><StatusT status={i.status} /> </p>
      </div>

      <div className="flex justify-between -mb-[28px] mr-5 lg:mr-0 lg:-mb-[30px] w-[102%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {Gregorian_to_jalali(i.suggested_at)} </div>
      </div>
    </div>
  )}
</div>
)}
export default O_RationV