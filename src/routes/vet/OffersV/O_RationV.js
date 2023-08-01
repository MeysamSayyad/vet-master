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
    <div key={i.id} className="border-2 rounded-3xl m-2 p-4 md:px-12 px-4 w-4/5 mb-6 mx-auto relative">
      <div className='absolute right-4 top-12'>
        <Btndel/>
      </div>
      <div className="grid grid-cols-5 text-center gap-4">
        <h5 className="my-2 border-l border-[#707070] "> نوع جیره </h5>
        <h5 className="my-2 border-l border-[#707070] "> مقدار </h5>
        <h5 className="my-2 border-l border-[#707070] ">تاریخ</h5>
        <h5 className=' font-semibold my-2 border-l border-[#707070]'>مجموع وزن جیره</h5>
        <h3 className="my-2 "> وضعیت </h3>

        <div>{i.data.map((i)=> <h6 className="mx-2"><RationT ration={i.name} /> </h6>)}</div>
        <div>{i.data.map((i)=> <h6 className="mx-2">{i.amount} </h6>)}</div>
        <h6 className='mx-2'>{Gregorian_to_jalali(i.date)} </h6>
        <div className='flex flex-col justify-center gap-2 '><p>{i.total_weight} کیلوگرم</p></div>
        <p className="mt-2"><StatusT status={i.status} /> </p>
      </div>

      <div className="flex justify-between -mb-[30px] w-[102%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {i.date} </div>
      </div>
    </div>
  )}
</div>
)}
export default O_RationV